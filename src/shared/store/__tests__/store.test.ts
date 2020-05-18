import { createStore } from "../createStore";
import { mockApi } from "shared/test/mockApi";
import { User } from "types/User";
import { getUsers } from "../users";

describe("Store", () => {
  let store: ReturnType<typeof createStore>;

  beforeEach(() => {
    store = createStore();
  });

  describe(".users", () => {
    it("is empty by default", () => {
      expect(store.getState().users).toEqual([]);
    });

    it("fetches a list of users", async () => {
      const user: User = {
        address: null,
        name: "Test User",
        username: "test-user",
        email: "test@example.com",
      };

      mockApi().get("/users").reply(200, [user]);

      await store.dispatch(getUsers());
      expect(store.getState().users).toEqual([user]);
    });
  });
});
