import { Handler } from "@octopusdeploy/step-api";
import HelloWorldTargetInputs from "./inputs";

const HelloWorldDeploymentTargetHealthCheckExecutor: Handler<HelloWorldTargetInputs> = async (_, context) => {
    context.print("Hello world target is healthy");
};

export default HelloWorldDeploymentTargetHealthCheckExecutor;