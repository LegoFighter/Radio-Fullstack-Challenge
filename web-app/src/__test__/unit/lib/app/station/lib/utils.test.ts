import { fetchStationDetails } from "../../../../../../app/station/lib/utils";

describe("Unit Test: fetchStationDetails", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  test("fetching 'wfan' returns exactly one station in the response array", async () => {
    const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [{ stationId: "wfan" }],
    } as Response);

    const result = await fetchStationDetails("wfan");
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(1);
  });

  test("fetching 'undefined' returns exactly zero station in the response array", async () => {
    const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    } as Response);

    const result = await fetchStationDetails("undefined");
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });
});
