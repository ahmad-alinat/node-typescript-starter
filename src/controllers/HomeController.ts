
import {controller, httpGet, requestParam} from "inversify-express-utils";

@controller('/')
export class HomeController {

    @httpGet('hello/:name')
    public sayHello(@requestParam("name") name: string): string {
        return "Hello " + name;
    }
}