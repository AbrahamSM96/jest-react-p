import "jsdom-global/register";
import React from "react";
import { mount } from "enzyme";
import Footer from "../../components/Footer";
import { create } from "react-test-renderer";
describe("<Footer />", () => {
  const footer = mount(<Footer />);

  test("Render del componente Footer", () => {
    expect(footer.length).toEqual(1);
  });
  test("Render title", () => {
    expect(footer.find(".Footer-title").text()).toEqual("Platzi Store");
  });
});

describe("Footer snapshot", () => {
  test("test UI component footer", () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
