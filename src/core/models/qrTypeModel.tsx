import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";

export interface QRType {
  dataType: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
}