variable "file_path" {
  description = "The path to the function's deployment package within the local filesystem"
}

variable "function_name" {
  description = "A unique name for your Lambda Functio"
}

variable "role" {
  description = "IAM role attached to the Lambda Function"
}

variable "handler" {
  description = "The function entrypoint in your code"
}

variable "runtime" {
  description = "The runtime of the Lambda Function to create"
  default     = "nodejs8.10"
}
