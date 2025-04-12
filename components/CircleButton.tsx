import { styled } from "@gluestack-style/react";
import { Pressable, View } from "@gluestack-ui/themed";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  onPress: () => void;
};

// Styled components using gluestack
const CircleButtonContainer = styled(View, {
  width: 84,
  height: 84,
  marginHorizontal: 60,
  borderWidth: 4,
  borderColor: "#ffd33d",
  borderRadius: 9999,
  padding: 3,
});

const CircleButtonInner = styled(Pressable, {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 9999,
  backgroundColor: "#fff",
});

export default function CircleButton({ onPress }: Props) {
  return (
    <CircleButtonContainer>
      <CircleButtonInner onPress={onPress}>
        <MaterialIcons name="add" size={38} color="#25292e" />
      </CircleButtonInner>
    </CircleButtonContainer>
  );
}
