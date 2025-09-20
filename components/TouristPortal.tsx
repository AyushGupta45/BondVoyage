import { LinearGradient } from "expo-linear-gradient";
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  Clock,
  CreditCard,
  Globe,
  MapPin,
  Phone,
  Shield,
  Zap,
} from "lucide-react-native";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

// Your reusable components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TouristPortal = () => {
  return (
    <LinearGradient colors={["#f8fafc", "#e0f2fe"]} style={{ flex: 1 }}>
      <ScrollView
        className="px-4 py-6"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View className="w-full max-w-6xl mx-auto">
          {/* Enhanced Header */}
          <View className="mb-6">
            <View className="flex-row items-center justify-between flex-wrap gap-4">
              <View>
                <Text className="text-3xl font-bold text-slate-800 mb-1">
                  Tourist Dashboard
                </Text>
                <Text className="text-slate-500 text-base">
                  Welcome back, John Doe
                </Text>
              </View>
              <LinearGradient
                colors={["#10b981", "#059669"]}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  borderRadius: 9999,
                  shadowOpacity: 0.25,
                }}
              >
                <CheckCircle color="white" size={16} />
                <Text className="text-white ml-2 text-sm font-semibold">
                  ID Verified
                </Text>
              </LinearGradient>
            </View>
          </View>

          {/* PRIORITY: Emergency Card - Now at the top */}
          <LinearGradient
            colors={["#ef4444", "#dc2626"]}
            style={{ borderRadius: 24, shadowOpacity: 0.5, marginBottom: 24 }}
          >
            <View className="p-6">
              <View className="flex-row items-center justify-between mb-4">
                <View className="flex-row items-center">
                  <View className="bg-red-600 p-3 rounded-full mr-3">
                    <AlertTriangle color="white" size={24} />
                  </View>
                  <View>
                    <Text className="text-xl font-bold text-white">
                      Emergency SOS
                    </Text>
                    <Text className="text-red-100 text-sm">
                      Instant emergency alert
                    </Text>
                  </View>
                </View>
                <View className="bg-red-600 px-3 py-1 rounded-full">
                  <Text className="text-white text-xs font-medium">24/7</Text>
                </View>
              </View>

              <LinearGradient
                colors={["rgba(255,255,255,0.2)", "rgba(255,255,255,0.3)"]}
                style={{
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: "rgba(255,255,255,0.3)",
                }}
              >
                <TouchableOpacity
                  onPress={() => {}}
                  activeOpacity={0.8}
                  className="w-full p-4 rounded-2xl"
                >
                  <View className="flex flex-row items-center justify-center gap-3">
                    <View className="bg-white p-2 rounded-full">
                      <Phone color="#EF4444" size={20} />
                    </View>
                    <Text className="text-base font-bold text-white">
                      EMERGENCY ALERT
                    </Text>
                    <Zap color="white" size={20} />
                  </View>
                </TouchableOpacity>
              </LinearGradient>
              <Text className="text-red-100 text-xs mt-3 text-center">
                Instantly alerts authorities & emergency contacts with your
                location
              </Text>
            </View>
          </LinearGradient>

          {/* Enhanced Top Row: Safety & Location */}
          <View className="flex-col lg:flex-row gap-4 mb-6">
            {/* Safety Score - Enhanced */}
            <Card className="bg-white/90 rounded-3xl border-0 shadow-xl flex-1">
              <CardHeader className="pb-2">
                <CardTitle>
                  <View className="flex-row items-center gap-3">
                    <LinearGradient
                      colors={["#3b82f6", "#1e40af"]}
                      style={{ padding: 12, borderRadius: 16 }}
                    >
                      <Shield color="white" size={20} />
                    </LinearGradient>
                    <View>
                      <Text className="text-lg font-bold text-slate-800">
                        Safety Score
                      </Text>
                      <Text className="text-slate-500 text-xs">
                        Real-time analysis
                      </Text>
                    </View>
                  </View>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <View className="items-center py-4">
                  <LinearGradient
                    colors={["#34d399", "#10b981"]}
                    style={{
                      width: 96,
                      height: 96,
                      borderRadius: 48,
                      alignItems: "center",
                      justifyContent: "center",
                      shadowOpacity: 0.25,
                      marginBottom: 12,
                    }}
                  >
                    <Text className="text-3xl font-black text-white">85</Text>
                  </LinearGradient>
                  <Text className="text-sm text-slate-500 mb-3">
                    out of 100
                  </Text>
                  <LinearGradient
                    colors={["#10b981", "#059669"]}
                    style={{
                      paddingHorizontal: 16,
                      paddingVertical: 8,
                      borderRadius: 9999,
                    }}
                  >
                    <Text className="text-white text-xs font-bold">
                      Excellent Safety Rating
                    </Text>
                  </LinearGradient>
                </View>
              </CardContent>
            </Card>

            {/* Current Location - Enhanced */}
            <Card className="bg-white/90 rounded-3xl border-0 shadow-xl flex-1">
              <CardHeader className="pb-2">
                <CardTitle>
                  <View className="flex-row items-center gap-3">
                    <LinearGradient
                      colors={["#3b82f6", "#1e40af"]}
                      style={{ padding: 12, borderRadius: 16 }}
                    >
                      <MapPin color="white" size={20} />
                    </LinearGradient>
                    <View>
                      <Text className="text-lg font-bold text-slate-800">
                        Current Location
                      </Text>
                      <Text className="text-slate-500 text-xs">
                        GPS tracking
                      </Text>
                    </View>
                  </View>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <View className="items-center py-4">
                  <Text className="text-xl font-bold text-slate-800 mb-1">
                    Downtown Tourist Area
                  </Text>
                  <Text className="text-sm text-slate-500 mb-4">
                    Verified safe zone
                  </Text>
                  <LinearGradient
                    colors={["#10b981", "#059669"]}
                    style={{
                      paddingHorizontal: 16,
                      paddingVertical: 8,
                      borderRadius: 9999,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <CheckCircle color="white" size={14} />
                    <Text className="text-white ml-2 text-xs font-bold">
                      Safe Area
                    </Text>
                  </LinearGradient>
                </View>
              </CardContent>
            </Card>
          </View>

          {/* Enhanced Second Row: Recent Activity + Emergency Contacts */}
          <View className="flex-col lg:flex-row gap-4 mb-6">
            {/* Recent Activity - Enhanced */}
            <Card className="bg-white/90 rounded-3xl border-0 shadow-xl flex-1">
              <CardHeader>
                <CardTitle>
                  <View className="flex-row items-center gap-3">
                    <LinearGradient
                      colors={["#8b5cf6", "#6366f1"]}
                      style={{ padding: 12, borderRadius: 16 }}
                    >
                      <Clock color="white" size={20} />
                    </LinearGradient>
                    <View>
                      <Text className="text-lg font-bold text-slate-800">
                        Recent Activity
                      </Text>
                      <Text className="text-slate-500 text-xs">
                        Live updates
                      </Text>
                    </View>
                  </View>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <View className="flex-col gap-3">
                  {/* Safe Zone */}
                  <LinearGradient
                    colors={["#ecfdf5", "#d1fae5"]}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 16,
                      borderRadius: 16,
                      borderLeftWidth: 4,
                      borderLeftColor: "#34d399",
                    }}
                  >
                    <View className="bg-emerald-100 p-2 rounded-full mr-3">
                      <CheckCircle color="#10B981" size={18} />
                    </View>
                    <View className="flex-1">
                      <Text className="font-bold text-slate-800">
                        Entered Safe Zone
                      </Text>
                      <Text className="text-sm text-slate-500">
                        Downtown Tourist Area • 2:30 PM
                      </Text>
                    </View>
                  </LinearGradient>

                  {/* Location Update */}
                  <LinearGradient
                    colors={["#eff6ff", "#dbeafe"]}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 16,
                      borderRadius: 16,
                      borderLeftWidth: 4,
                      borderLeftColor: "#60a5fa",
                    }}
                  >
                    <View className="bg-blue-100 p-2 rounded-full mr-3">
                      <MapPin color="#3B82F6" size={18} />
                    </View>
                    <View className="flex-1">
                      <Text className="font-bold text-slate-800">
                        Location Update
                      </Text>
                      <Text className="text-sm text-slate-500">
                        City Center • 1:45 PM
                      </Text>
                    </View>
                  </LinearGradient>

                  {/* Geo-fence Alert */}
                  <LinearGradient
                    colors={["#fffbeb", "#fef3c7"]}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 16,
                      borderRadius: 16,
                      borderLeftWidth: 4,
                      borderLeftColor: "#fbbf24",
                    }}
                  >
                    <View className="bg-amber-100 p-2 rounded-full mr-3">
                      <AlertCircle color="#F59E0B" size={18} />
                    </View>
                    <View className="flex-1">
                      <Text className="font-bold text-slate-800">
                        Geo-fence Alert
                      </Text>
                      <Text className="text-sm text-slate-500">
                        Restricted area warning • 12:15 PM
                      </Text>
                    </View>
                  </LinearGradient>
                </View>
              </CardContent>
            </Card>

            {/* Emergency Contacts - Enhanced */}
            <Card className="bg-white/90 rounded-3xl border-0 shadow-xl flex-1">
              <CardHeader>
                <CardTitle>
                  <View className="flex-row items-center gap-3">
                    <LinearGradient
                      colors={["#f43f5e", "#dc2626"]}
                      style={{ padding: 12, borderRadius: 16 }}
                    >
                      <Phone color="white" size={20} />
                    </LinearGradient>
                    <View>
                      <Text className="text-lg font-bold text-slate-800">
                        Emergency Contacts
                      </Text>
                      <Text className="text-slate-500 text-xs">
                        Quick access
                      </Text>
                    </View>
                  </View>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <View className="flex-col gap-3">
                  <LinearGradient
                    colors={["#f8fafc", "#f1f5f9"]}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: 16,
                      borderRadius: 16,
                      borderWidth: 1,
                      borderColor: "#e2e8f0",
                    }}
                  >
                    <View className="flex-1">
                      <Text className="font-bold text-slate-800">
                        Emergency Services
                      </Text>
                      <Text className="text-sm text-slate-500">+1 911</Text>
                    </View>
                    <LinearGradient
                      colors={["#f43f5e", "#dc2626"]}
                      style={{
                        borderRadius: 12,
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                      }}
                    >
                      <Button className="bg-transparent">
                        <Phone color="white" size={16} />
                      </Button>
                    </LinearGradient>
                  </LinearGradient>

                  <LinearGradient
                    colors={["#f8fafc", "#f1f5f9"]}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: 16,
                      borderRadius: 16,
                      borderWidth: 1,
                      borderColor: "#e2e8f0",
                    }}
                  >
                    <View className="flex-1">
                      <Text className="font-bold text-slate-800">
                        Family Contact
                      </Text>
                      <Text className="text-sm text-slate-500">
                        +1 234 567 8901
                      </Text>
                    </View>
                    <LinearGradient
                      colors={["#3b82f6", "#1e40af"]}
                      style={{
                        borderRadius: 12,
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                      }}
                    >
                      <Button className="bg-transparent">
                        <Phone color="white" size={16} />
                      </Button>
                    </LinearGradient>
                  </LinearGradient>

                  <LinearGradient
                    colors={["#f8fafc", "#f1f5f9"]}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: 16,
                      borderRadius: 16,
                      borderWidth: 1,
                      borderColor: "#e2e8f0",
                    }}
                  >
                    <View className="flex-1">
                      <Text className="font-bold text-slate-800">
                        Hotel Concierge
                      </Text>
                      <Text className="text-sm text-slate-500">
                        +1 234 567 8902
                      </Text>
                    </View>
                    <LinearGradient
                      colors={["#10b981", "#059669"]}
                      style={{
                        borderRadius: 12,
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                      }}
                    >
                      <Button className="bg-transparent">
                        <Phone color="white" size={16} />
                      </Button>
                    </LinearGradient>
                  </LinearGradient>
                </View>
              </CardContent>
            </Card>
          </View>

          {/* Enhanced Digital Tourist ID */}
          <Card className="bg-white/90 rounded-3xl border-0 shadow-xl mb-6">
            <CardHeader>
              <CardTitle>
                <View className="flex-row items-center gap-3">
                  <LinearGradient
                    colors={["#6366f1", "#8b5cf6"]}
                    style={{ padding: 12, borderRadius: 16 }}
                  >
                    <CreditCard color="white" size={20} />
                  </LinearGradient>
                  <View>
                    <Text className="text-lg font-bold text-slate-800">
                      Digital Tourist ID
                    </Text>
                    <Text className="text-slate-500 text-xs">
                      Blockchain secured
                    </Text>
                  </View>
                </View>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <LinearGradient
                colors={["#4f46e5", "#7c3aed", "#2563eb"]}
                style={{ padding: 24, borderRadius: 24 }}
              >
                <View className="flex-row items-center justify-between mb-6">
                  <View className="flex-row items-center">
                    <LinearGradient
                      colors={[
                        "rgba(255,255,255,0.2)",
                        "rgba(255,255,255,0.3)",
                      ]}
                      style={{ padding: 12, borderRadius: 16, marginRight: 12 }}
                    >
                      <Globe color="white" size={24} />
                    </LinearGradient>

                    <View className="flex-col">
                      <Text className="font-black text-white text-lg">
                        SAFE TOUR ID
                      </Text>

                      <LinearGradient
                        colors={[
                          "rgba(255,255,255,0.2)",
                          "rgba(255,255,255,0.3)",
                        ]}
                        style={{
                          paddingHorizontal: 16,
                          paddingVertical: 8,
                          borderRadius: 9999,
                          borderWidth: 1,
                          borderColor: "rgba(255,255,255,0.3)",
                        }}
                        className="flex justify-center items-center"
                      >
                        <Text className="text-white text-xs font-bold">
                          ✓ VERIFIED
                        </Text>
                      </LinearGradient>
                    </View>
                  </View>
                </View>

                <LinearGradient
                  colors={["rgba(255,255,255,0.1)", "rgba(255,255,255,0.2)"]}
                  style={{
                    borderRadius: 16,
                    padding: 16,
                    borderWidth: 1,
                    borderColor: "rgba(255,255,255,0.2)",
                  }}
                >
                  <View className="flex-row flex-wrap gap-4">
                    <View className="flex-1 min-w-[120px]">
                      <Text className="text-sm text-white/70 mb-1">
                        Tourist Name
                      </Text>
                      <Text className="font-bold text-white">John Doe</Text>
                    </View>
                    <View className="flex-1 min-w-[120px]">
                      <Text className="text-sm text-white/70 mb-1">
                        Nationality
                      </Text>
                      <Text className="font-bold text-white">
                        United States
                      </Text>
                    </View>
                    <View className="flex-1 min-w-[120px]">
                      <Text className="text-sm text-white/70 mb-1">
                        Valid Until
                      </Text>
                      <Text className="font-bold text-white">Dec 31, 2024</Text>
                    </View>
                    <View className="flex-1 min-w-[120px]">
                      <Text className="text-sm text-white/70 mb-1">
                        ID Number
                      </Text>
                      <Text className="font-bold text-white">
                        ST-2024-001234
                      </Text>
                    </View>
                  </View>
                </LinearGradient>
              </LinearGradient>
            </CardContent>
          </Card>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default TouristPortal;
