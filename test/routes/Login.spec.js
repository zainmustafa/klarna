import React from "react";
import { mount } from "enzyme";

import Login from "routes/Login";

function setup() {
    const props = {
        location: {}
    };

    return mount(<Login {...props} />);
}

describe("Login", () => {
    const wrapper = setup(true);

    it("should be a Component", () => {
        expect(wrapper.instance() instanceof React.Component).toBe(true);
    });

    it("should render properly", () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it("should render the redirect location", () => {
        wrapper.setProps({
            location: {
                state: { from: "/private" }
            }
        });

        expect(wrapper.html()).toMatchSnapshot();
    });
});
