import { mockRequest, mockResponse } from "../../__mocks__";
import { getUsers } from "../../handlers/users";

describe("getUsers", () => {
  it("should return an empty array", () => {
    getUsers(mockRequest, mockResponse);

    expect(mockResponse.send).toHaveBeenCalledWith([]);
  });
});
