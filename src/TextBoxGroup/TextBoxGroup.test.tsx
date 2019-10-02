import * as React from "react";
import { shallow, mount, ShallowWrapper, ReactWrapper } from "enzyme";
import { TextBoxGroup, TextBoxGroupProps } from "./TextBoxGroup";

describe("Component: TextBoxGroup", () => {
    let wrapper: ShallowWrapper<TextBoxGroupProps>;
    let props: TextBoxGroupProps = {
        name: "myTextboxgroup",
        value: "",
        onChange: jest.fn()
    }

    beforeEach(() => {
        wrapper = shallow(<TextBoxGroup {...props} />);
    });

    it("Should render", () => {
        expect(wrapper).toBeDefined();
        expect(wrapper.hasClass("input-box-group")).toBeTruthy();
    });

    it("Should pass down the id to the TextBoxGroup component", () => {
        wrapper.setProps({ id: "my-TextBoxGroup-id" });
        expect(wrapper.find("#my-TextBoxGroup-id")).toHaveLength(1);
    });

    it("Should pass down extra optional attributes to the component", () => {
        wrapper.setProps({ pattern: "my-pattern", minLength: 2, maxLength: 4, required: true });
        const componentProps = wrapper.find("input").getElement().props;
        expect(componentProps.pattern).toEqual("my-pattern");
        expect(componentProps.minLength).toEqual(2);
        expect(componentProps.maxLength).toEqual(4);
        expect(componentProps.required).toEqual(true);
    });

    it("Should trigger onChange callback when change to input element is detected", () => {
        wrapper.find("input").simulate("change", { target: { value: "test" } });
        expect(props.onChange).toBeCalledWith({ target: { value: "test" } });
    });

    describe("Testing optional events", () => {
        let mountedProps: TextBoxGroupProps;
        let mountedWrapper: ReactWrapper<TextBoxGroupProps>;

        beforeAll(() => {
            mountedProps = {
                name: "myTextboxgroup",
                value: "",
                onChange: jest.fn(),
                onKeyDown: jest.fn(),
                onKeyUp: jest.fn(),
                onKeyPress: jest.fn(),
                onFocus: jest.fn(),
                onBlur: jest.fn()
            };
            mountedWrapper = mount(<TextBoxGroup {...mountedProps} />);
            mountedWrapper.find(".form-control").simulate("keyDown", { key: "a", keyCode: 65 });
            mountedWrapper.find(".form-control").simulate("keyUp", { key: "a", keyCode: 65 });
            mountedWrapper.find(".form-control").simulate("keyPress", { key: "a", keyCode: 65 });
            mountedWrapper.find(".form-control").simulate("focus", { key: "a", keyCode: 65 });
            mountedWrapper.find(".form-control").simulate("blur", { key: "a", keyCode: 65 });
        });

        test("KeyDown", () => expect(mountedProps.onKeyDown).toBeCalled());
        test("KeyUp", () => expect(mountedProps.onKeyUp).toBeCalled());
        test("KeyPress", () => expect(mountedProps.onKeyPress).toBeCalled());
        test("Focus", () => expect(mountedProps.onFocus).toBeCalled());
        test("Blur", () => expect(mountedProps.onBlur).toBeCalled());
    });

    it("Should pass custom class", () => {
        const className: string = "myTextboxGroup";
        wrapper.setProps({ className });
        expect(wrapper.hasClass(className)).toBeTruthy();
    });

    it("Should render label and error", () => {
        wrapper.setProps({ label: "label" });
        expect(wrapper.find("label").length).toBe(1);
        expect(wrapper.find(".alert").length).toBe(1);
        expect(wrapper.find("label").text()).toEqual("label");
        expect(wrapper.find(".alert-danger").text()).toEqual("error");
        expect(wrapper.find(".input-group").hasClass("has-error")).toBeTruthy();
    });

    it("Should show error and success indicators", () => {
        wrapper.setProps({ error: "error" });
        expect(wrapper.find(".input-group").hasClass("has-error")).toBeTruthy();
        wrapper.setProps({ success: true });
        expect(wrapper.find(".input-group").hasClass("has-error")).toBeFalsy();
        expect(wrapper.find(".input-group").hasClass("success")).toBeTruthy();
        expect(wrapper.find(".alert-danger")).toHaveLength(0);
    });

    describe("Testing optional properties", () => {
        let inputProps: TextBoxGroupProps;
        const optionals: Array<Partial<Pick<TextBoxGroupProps, keyof TextBoxGroupProps>>> = [
            { name: "" },
            { name: "my-textbox-name" },
            { pattern: "my-pattern" },
            { minLength: 2 },
            { maxLength: 4 },
            { required: true },
            { autoComplete: "on" },
            { type: "number" },
            { disabled: true },
            { readonly: true },
            { placeholder: "my placeholder" },
        ];
        optionals.map((optional: Pick<TextBoxGroupProps, keyof TextBoxGroupProps>) => {
            const key: string = Object.keys(optional)[0];
            test(key, () => {
                wrapper.setProps({ ...optional });
                inputProps = wrapper.find("input").getElement().props;
                expect(inputProps[key]).toEqual(optional[key]);
            });
        });
    });

    describe("Test left append", () => {
        it("Should render text and title", () => {
            wrapper.setProps({ leftText: "leftText", leftTitle: "leftTitle" });
            expect(wrapper.find(".input-box-group-wrapper").children().at(0).hasClass("input-group-prepend")).toBeTruthy();
            expect(wrapper.find(".input-group-text").length).toBe(1);
            expect(wrapper.find(".input-group-text").prop("title")).toEqual("leftTitle");
            expect(wrapper.find(".input-group-text").text()).toEqual("leftText");
        });

        it("Should render icon and trigger onLeftClick callback when clicked", () => {
            const onLeftClick: jest.Mock = jest.fn();
            const testIcon: JSX.Element = <svg />;
            wrapper.setProps({ leftIcon: testIcon, onLeftClick });
            expect(wrapper.find(".input-group-prepend").hasClass("clickable")).toBeTruthy();
            expect(wrapper.find(".input-group-text").childAt(0).matchesElement(testIcon)).toBeTruthy();
            wrapper.find(".input-group-prepend").simulate("click");
            expect(onLeftClick).toBeCalled();
        });
    });

    describe("Test right append", () => {
        it("Should render text and title", () => {
            wrapper.setProps({ rightText: "rightText", rightTitle: "rightTitle" });
            expect(wrapper.find(".input-box-group-wrapper").children().at(1).hasClass("input-group-append")).toBeTruthy();
            expect(wrapper.find(".input-group-text").length).toBe(1);
            expect(wrapper.find(".input-group-text").prop("title")).toEqual("rightTitle");
            expect(wrapper.find(".input-group-text").text()).toEqual("rightText");
        });

        it("Should render icon and trigger onRightClick callback when clicked", () => {
            const onRightClick: jest.Mock = jest.fn();
            const testIcon: JSX.Element = <svg />;
            wrapper.setProps({ rightIcon: testIcon, onRightClick });
            expect(wrapper.find(".input-group-append").hasClass("clickable")).toBeTruthy();
            expect(wrapper.find(".input-group-text").childAt(0).matchesElement(testIcon)).toBeTruthy();
            wrapper.find(".input-group-append").simulate("click");
            expect(onRightClick).toBeCalled();
        });
    });
});
