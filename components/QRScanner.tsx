import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Camera, CameraView } from 'expo-camera';

type Props = {
  onScan: (data: string) => void;
};

export default function QRScanner({ onScan }: Props) {
  const [permission, setPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermission(status === 'granted');
    })();
  }, []);

  const handleScanned = ({ data }: { data: string }) => {
    if (!scanned) {
      setScanned(true);
      onScan(data);
      setTimeout(() => setScanned(false), 2000);
    }
  };

  if (permission === null) return <Text>Requesting camera permission...</Text>;
  if (!permission) return <Text>No access to camera</Text>;

  return (
    <View style={styles.wrapper}>
        <CameraView
        onBarcodeScanned={scanned ? undefined : handleScanned}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 300,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20
  },
  frame: {
    flex: 1,
    borderColor: '#00ffe0',
    borderWidth: 2,
    borderRadius: 20
  }
});

