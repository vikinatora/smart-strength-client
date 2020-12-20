import {
    NetInfo
} from "react-native";
import checkNetwork from "...";
import {
    NO_NETWORK_CONNECTION
} from "...";

jest.mock('react-native', () => ({
    NetInfo: {
        isConnected: {
            fetch: jest.fn()
        }
    }
}))

test('test offline', async () => {
    NetInfo.isConnected.fetch.mockResolvedValueOnce(false)
    expect(await checkNetwork()).toBe(NO_NETWORK_CONNECTION)
})

test('test online', async () => {
    NetInfo.isConnected.fetch.mockResolvedValueOnce(true)
    expect(await checkNetwork()).toBe(true)
})