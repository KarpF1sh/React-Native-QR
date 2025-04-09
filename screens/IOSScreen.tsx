import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import QRScanner from '../components/QRScanner';
import WalletPass from '../components/WalletPass';

export default function IOSScreen() {
  const [passes, setPasses] = useState<{ title: string; data: string }[]>([]);

  const handleSave = (data: string) => {
    const title = `QR Pass #${passes.length + 1}`;
    setPasses([...passes, { title, data }]);
    Alert.alert('Added to Wallet ✨', data);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Wallet 🍏</Text>
      <QRScanner onScan={handleSave} />
      <Text style={styles.sub}>Tap to scan and add to your wallet</Text>

      {passes.map((pass, index) => (
        <WalletPass key={index} title={pass.title} data={pass.data} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingBottom: 100 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#00ffe0', marginBottom: 10, alignSelf: 'center' },
  sub: { textAlign: 'center', color: '#aaa', marginBottom: 20 }
});
