import React from "react";
import { create } from "react-test-render";
import Status from "./Status";
//Обновить реакт до новейшей версии и пробовать ещё раз

describe("Status component", () => {
    test("status from props should be in the state", () => {
        const component = create(<Status status='new status'/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('new status')
    });
});