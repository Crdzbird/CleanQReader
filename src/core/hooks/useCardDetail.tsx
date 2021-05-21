import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Linking, Platform, ToastAndroid,
      Alert } from "react-native";
import { styles } from "../../config/styles";

export const useCardDetail = () => {
    const onTap = (type: string, data: string) => {
    switch (type) {
        case 'URL':
            Linking.openURL(data);
            break;
        default:
            notifyMessage(data);
            break;
    }
}

const notifyMessage = (message: string) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.LONG);
  } else {
    Alert.alert(message);
  }
}

const QRIcon = (props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
}) => {
  return (
    <MaterialCommunityIcons
      size={35}
      style={styles.itemQRIcon}
      {...props}
    />
  );
}

return {
    notifyMessage,
    onTap,
    QRIcon,
}
}
