import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

type Props = {
  title: string;
  data: string;
};

export default function WalletPass({ title, data }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <QRCode value={data} size={100} color="#000000" />
      <Text style={styles.data}>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6
  },
  title: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 12,
    fontWeight: '600'
  },
  data: {
    color: '#ccc',
    marginTop: 10,
    fontSize: 12,
    textAlign: 'center'
  }
});
