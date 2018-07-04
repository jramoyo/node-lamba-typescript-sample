resource "aws_lambda_function" "lambda" {
  filename      = "${var.file_path}"
  function_name = "${var.function_name}"
  role          = "${var.role}"
  handler       = "${var.handler}"
  runtime       = "${var.runtime}"
}
