# Send sms with Lambda

Trash mobile number was provided by [spoofbox.com](https://www.spoofbox.com/en/tool/trash-mobile)

Guide from aws [Relay an AWS DeepLens Project Output through AWS SMS](https://docs.aws.amazon.com/deeplens/latest/dg/deeplens-extend.html)

Notice you should login with sls creds:
```
sls config credentials --provider aws --key YOURKEY --secret YOURSECRET
```

Lambda should have permissions to call SNS and `AWSIoTConfigAccess`
