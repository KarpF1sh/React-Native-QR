import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

type WalletPassProps = {
  title: string;
  data: string;
};

export default function WalletPass({ title, data }: WalletPassProps) {
  return (
    <View style={styles.pass}>
      <Text style={styles.title}>{title}</Text>
      <QRCode value={data} size={120} />
      <Text style={styles.data}>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pass: {
    backgroundColor: '#1e1e1e',
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5
  },
  title: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
    fontWeight: 'bold'
  },
  data: {
    color: '#ccc',
    marginTop: 10,
    fontSize: 12,
    textAlign: 'center'
  }
});
