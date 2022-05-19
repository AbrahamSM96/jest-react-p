import "jsdom-global/register";

import React from "react";
import { mount, shallow } from "enzyme";
import ProviderMock from "../__mocks__/ProviderMock";
import Header from "../../components/Header";
import { create } from "react-test-renderer";

describe("<Header/>", () => {
  test("should render the component ", () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.length).toEqual(1);
  });

  test("should render the title ", () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.find(".Header-title").text()).toEqual("Platzi Store");
  });
});

describe("header snapshot", () => {
  test("test snapshot to header", () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});
