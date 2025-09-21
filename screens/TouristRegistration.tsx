import { Shield } from "lucide-react-native";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const TouristRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    passport: "",
    nationality: "",
    phone: "",
    checkin: "",
    checkout: "",
    emergency: "",
  });

  const handleRegistration = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <ScrollView className="flex-1 pt-20 pb-12 px-4">
      <View className="max-w-xl mx-auto">
        {/* Header */}
        <View className="items-center mb-8">
          <View className="p-4 bg-green-500 rounded-2xl mb-4">
            <Shield color="white" size={48} />
          </View>
          <Text className="text-4xl font-bold mb-4 text-center">
            Digital Tourist Registration
          </Text>
          <Text className="text-xl text-gray-600 text-center">
            Create your secure digital ID for enhanced safety monitoring
          </Text>
        </View>

        {/* Form Card */}
        <View className="bg-white rounded-xl shadow p-6 space-y-6">
          {/* First & Last Name */}
          <View className="flex-row gap-4">
            <View className="flex-1">
              <Text className="text-sm text-gray-500 mb-1">First Name</Text>
              <TextInput
                className="border border-gray-300 rounded-lg px-3 py-2"
                placeholder="John"
                value={formData.firstName}
                onChangeText={(text) =>
                  setFormData({ ...formData, firstName: text })
                }
              />
            </View>
            <View className="flex-1">
              <Text className="text-sm text-gray-500 mb-1">Last Name</Text>
              <TextInput
                className="border border-gray-300 rounded-lg px-3 py-2"
                placeholder="Doe"
                value={formData.lastName}
                onChangeText={(text) =>
                  setFormData({ ...formData, lastName: text })
                }
              />
            </View>
          </View>

          {/* Passport */}
          <View>
            <Text className="text-sm text-gray-500 mb-1">Passport Number</Text>
            <TextInput
              className="border border-gray-300 rounded-lg px-3 py-2"
              placeholder="A12345678"
              value={formData.passport}
              onChangeText={(text) =>
                setFormData({ ...formData, passport: text })
              }
            />
          </View>

          {/* Nationality & Phone */}
          <View className="flex-row gap-4">
            <View className="flex-1">
              <Text className="text-sm text-gray-500 mb-1">Nationality</Text>
              <TextInput
                className="border border-gray-300 rounded-lg px-3 py-2"
                placeholder="United States"
                value={formData.nationality}
                onChangeText={(text) =>
                  setFormData({ ...formData, nationality: text })
                }
              />
            </View>
            <View className="flex-1">
              <Text className="text-sm text-gray-500 mb-1">Phone Number</Text>
              <TextInput
                className="border border-gray-300 rounded-lg px-3 py-2"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChangeText={(text) =>
                  setFormData({ ...formData, phone: text })
                }
              />
            </View>
          </View>

          {/* Check-in & Check-out */}
          <View className="flex-row gap-4">
            <View className="flex-1">
              <Text className="text-sm text-gray-500 mb-1">Check-in Date</Text>
              <TextInput
                className="border border-gray-300 rounded-lg px-3 py-2"
                placeholder="YYYY-MM-DD"
                value={formData.checkin}
                onChangeText={(text) =>
                  setFormData({ ...formData, checkin: text })
                }
              />
            </View>
            <View className="flex-1">
              <Text className="text-sm text-gray-500 mb-1">Check-out Date</Text>
              <TextInput
                className="border border-gray-300 rounded-lg px-3 py-2"
                placeholder="YYYY-MM-DD"
                value={formData.checkout}
                onChangeText={(text) =>
                  setFormData({ ...formData, checkout: text })
                }
              />
            </View>
          </View>

          {/* Emergency Contact */}
          <View>
            <Text className="text-sm text-gray-500 mb-1">
              Emergency Contact
            </Text>
            <TextInput
              className="border border-gray-300 rounded-lg px-3 py-2"
              placeholder="Contact name and phone"
              value={formData.emergency}
              onChangeText={(text) =>
                setFormData({ ...formData, emergency: text })
              }
            />
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            onPress={handleRegistration}
            className="bg-green-600 rounded-lg py-3 items-center flex-row justify-center"
          >
            <Shield color="white" size={20} />
            <Text className="text-white font-semibold ml-2">
              Create Digital Tourist ID
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default TouristRegistration;
