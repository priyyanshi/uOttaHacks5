# Reference: https://www.twilio.com/docs

# Download the helper library from https://www.twilio.com/docs/python/install
import os
from twilio.rest import Client

# Configuration file variables:
account_sid = '' # Need to configure.
auth_token = '' # Need to configure.
from_number = '' # Need to configure.
to_number = '' # Need to configure.

def message_developers():
    # Find your Account SID and Auth Token at twilio.com/console
    # and set the environment variables. See http://twil.io/secure
    client = Client(account_sid, auth_token)

    f = open('twilio_message.txt', 'r')
    content = f.read()

    message = client.messages.create(
                                body=content,
                                from_=from_number,
                                to=to_number
                            )

    # print(message.sid)

def call_developers(message_to_send):
    # Find your Account SID and Auth Token at twilio.com/console
    # and set the environment variables. See http://twil.io/secure
    client = Client(account_sid, auth_token)

    call = client.calls.create(
                            url='http://demo.twilio.com/docs/voice.xml',
                            to=to_number,
                            from_=from_number
                        )

    # print(call.sid)

message_developers()
# call_developers("This is a message from eClean") # Put this message in a text file.
