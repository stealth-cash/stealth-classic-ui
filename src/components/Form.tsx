import { Button } from "./Button";
import { Input } from "./Input";

export const Form = () => {
    return (
        <div>
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <Button text="Submit" />
        </div>
    );
}