import React from "react";
import { View, Text, StyleSheet, Modal, TouchableHighlight } from "react-native";

export default MessageModal = (props) => {
  return <Modal
    animationType="fade"
    transparent={true}
    visible={props.showModal}
  >
    <View style={modalStyles.centeredView}>
      <View style={modalStyles.modalView}>
        <Text style={modalStyles.boldModalTextBig}>{props.message}</Text>
        <TouchableHighlight
          style={{ ...modalStyles.openButton, backgroundColor: '#2196F3' }}
          onPress={() => {
            props.setShowModal(false);
          }}>
          <Text style={modalStyles.whiteTextStyle}>{props.buttonText}</Text>
        </TouchableHighlight>
      </View>
    </View>
  </Modal>
}


const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: "80%",
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    marginTop: 20,
    backgroundColor: '#F194FF',
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    elevation: 2,
    width: "80%"
  },
  whiteTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  blackTextStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  boldModalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 18
  },
  boldModalTextBig: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 24
  },
})