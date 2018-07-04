provider "aws" {
  region = "${var.aws_region}"
}

data "aws_caller_identity" "current" { }

module "persons_lambda" {
  source        = "./lambda"

  file_path     = "../build/lambda-typescript-sample.zip"
  function_name = "persons_lambda"
  role          = "${aws_iam_role.persons_lambda_role.arn}"
  handler       = "lambda.handler"
  runtime       = "nodejs8.10"
}

resource "aws_api_gateway_rest_api" "persons_api" {
  name = "Persons API"
}

resource "aws_api_gateway_resource" "persons_api_proxy_resource" {
  rest_api_id = "${aws_api_gateway_rest_api.persons_api.id}"
  parent_id   = "${aws_api_gateway_rest_api.persons_api.root_resource_id}"
  path_part   = "{proxy+}"
}

module "persons_api_persons_resource_get" {
  source      = "./api_method"

  rest_api_id = "${aws_api_gateway_rest_api.persons_api.id}"
  resource_id = "${aws_api_gateway_resource.persons_api_proxy_resource.id}"
  method      = "GET"
  path        = "${aws_api_gateway_resource.persons_api_proxy_resource.path}"
  lambda      = "${module.persons_lambda.name}"
  region      = "${var.aws_region}"
  account_id  = "${data.aws_caller_identity.current.account_id}"
}

resource "aws_api_gateway_deployment" "persons_api_deployment" {
  depends_on  = ["module.persons_api_persons_resource_get"]

  rest_api_id = "${aws_api_gateway_rest_api.persons_api.id}"
  stage_name  = "demo"
}
