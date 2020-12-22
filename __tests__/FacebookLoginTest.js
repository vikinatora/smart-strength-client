( async () => {
    jest.mock('./FacebookConnector');
    jest.mock('react-native-fbsdk', () => ({
      LoginManager: {
        logInWithPermissions: jest.fn().mockReturnValue('result'),
      },
      AccessToken: {
        getCurrentAccessToken: jest.fn().mockReturnValue(false),
      }
    }));

    const sendFirebaseMock = jest.spyOn(FacebookConnector, 'sendDataToFirebase');

    await FacebookConnector.login();
    expect(sendFirebaseMock).toHaveBeenCalledTimes(1);
  });