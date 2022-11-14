import { CourierClient } from "@trycourier/courier";

const courier = CourierClient({ authorizationToken: "YOUR_AUTH_TOKEN_HERE" });

const { requestId } = await courier.send({
  message: {
    to: { "tiptop4002@gmail.com"
    },
    template: "ZNMP9F7YCVMCQQG6Z3Q4793JWT1N",
    data: {
      variables: "Haresh",
    },
  },
});
// 

