import * as exampleService from "../services/example.service";

export const get = (_, res) => {
    res.send(exampleService.hello());
};

