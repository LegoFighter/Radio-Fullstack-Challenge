import { fetchStations } from "../../../lib/utils";

describe("Unit Test: fetchStations", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  test("returns JSON when response is ok", async () => {
    const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [{ id: "123", name: "Test Station" }],
    } as Response);

    const result = await fetchStations(1);
    expect(result).toEqual([{ id: "123", name: "Test Station" }]);
    expect(mockFetch).toHaveBeenCalledTimes(1);
  });

  test("throws an error when response is not ok", async () => {
    const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;

    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: async () => ({ message: "Not found" }),
    } as Response);

    await expect(fetchStations()).rejects.toThrow(
      "Failed to fetch top stations data"
    );
  });

  test("includes 'count' query param if a top value is provided", async () => {
    const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    } as Response);

    await fetchStations(5);

    expect(mockFetch).toHaveBeenCalledTimes(1);

    const callUrl = mockFetch.mock.calls[0][0] as string;
    expect(callUrl).toContain("systemName=STATIONS_TOP");
    expect(callUrl).toContain("count=5");
  });
});
