resource "aws_iam_role" "typescript_sample_role" {
  name = "iam_for_lambda"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_lambda_function" "typescript_sample" {
  filename      = "../build/lambda-typescript-sample.zip"
  function_name = "typescript_sample"
  role          = "${aws_iam_role.typescript_sample_role.arn}"
  handler       = "lambda.handler"
  runtime       = "nodejs8.10"
}
