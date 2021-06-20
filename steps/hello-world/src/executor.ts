import HelloWorldStepInputs from "./inputs";
import {ExecutionInputs, Handler, OctopusContext, TargetInputs} from "@octopusdeploy/step-api";
import HelloWorldTargetInputs from "../../hello-world-target/src/inputs";

const HelloWorldStepExecutor: Handler<HelloWorldStepInputs, HelloWorldTargetInputs> = async (
    inputs: ExecutionInputs<HelloWorldStepInputs>,
    target: TargetInputs<HelloWorldTargetInputs>,
    context: OctopusContext
) => {
    context.print(target.greetingPrefix + " " + inputs.name);
};

export default HelloWorldStepExecutor;