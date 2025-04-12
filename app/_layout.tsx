import "@/global.css";
import { Stack } from "expo-router";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

export default function RootLayout() {
	const [colorMode, setColorMode] = useState<"dark" | "light">("light");

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<GluestackUIProvider mode={colorMode} >			
				<Stack>
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
					<Stack.Screen name="+not-found" />
				</Stack>
				<StatusBar style={colorMode} />
			</GluestackUIProvider>
		</GestureHandlerRootView>
	);
}
