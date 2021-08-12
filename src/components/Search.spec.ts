import { mount } from "@vue/test-utils";
import Search from "./Search.vue";

describe("Search", () => {
  it("should update search keyword", () => {
    const wrapper = mount(Search);
    const keyword = "jazz";

    wrapper.find("input").setValue(keyword);

    const searchKeyword = wrapper.vm.searchKeyword;

    expect(searchKeyword).toBe(keyword);
  });

  it("should emit search event", () => {
    const wrapper = mount(Search);
    const keyword = "jazz";

    wrapper.find("input").setValue(keyword);
    wrapper.find("button").trigger("click");

    const searchKeyword = wrapper.vm.searchKeyword;

    expect(wrapper.emitted()).toEqual(
      expect.objectContaining({ updateKeyword: [[searchKeyword]] })
    );
  });
});
