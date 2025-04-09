import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import QRScanner from '../components/QRScanner';
import WalletPass from '../components/WalletPass';

export default function IOSScreen() {
  const [passes, setPasses] = useState<{ title: string; data: string }[]>([]);

  const handleSave = (data: string) => {
    const title = `QR Code #${passes.length + 1}`;
    setPasses([...passes, { title, data }]);
    Alert.alert('Added to Wallet (mock)', data);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>iOS QR Scanner (Simulated Wallet)</Text>
      <QRScanner onScan={handleSave} />
      {passes.map((pass, index) => (
        <WalletPass key={index} title={pass.title} data={pass.data} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 }
});
