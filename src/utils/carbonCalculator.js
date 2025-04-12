// Helper functions to calculate carbon footprint based on activities
// Carbon emission factors (simplified for demo purposes)
const emissionFactors = {
  transportation: {
    car: 0.12,
    // kg CO2e per km
    bus: 0.05,
    // kg CO2e per km
    train: 0.03,
    // kg CO2e per km
    plane: 0.25,
    // kg CO2e per km
    bike: 0,
    // kg CO2e per km
    walk: 0 // kg CO2e per km
  },
  energy: {
    electricity: 0.5,
    // kg CO2e per kWh
    gas: 0.2,
    // kg CO2e per kWh
    heating: 0.27 // kg CO2e per kWh
  },
  food: {
    meat: 6.0,
    // kg CO2e per kg
    dairy: 2.0,
    // kg CO2e per kg
    vegetables: 0.5,
    // kg CO2e per kg
    processed: 3.0 // kg CO2e per kg
  }
};
// Unit conversion factors
const unitConversions = {
  miles: 1.60934,
  // miles to km
  m3: 10,
  // cubic meters to kWh (approximate)
  liter: 10,
  // liters to kWh (approximate)
  servings: 0.25 // servings to kg (approximate)
};
// Calculate carbon footprint for a single activity
export const calculateActivityFootprint = activity => {
  const {
    type,
    subtype,
    value,
    unit
  } = activity;
  // Convert units if necessary
  let convertedValue = value;
  if (unitConversions[unit]) {
    convertedValue = value * unitConversions[unit];
  }
  // Get emission factor
  const emissionFactor = emissionFactors[type]?.[subtype] || 0;
  // Calculate emissions
  return convertedValue * emissionFactor;
};
// Calculate total carbon footprint from all activities
export const calculateFootprint = activities => {
  // If no activities, return zero values
  if (!activities || activities.length === 0) {
    return {
      daily: 0,
      weekly: 0,
      monthly: 0,
      total: 0
    };
  }
  // Calculate total emissions
  const total = activities.reduce((sum, activity) => {
    return sum + calculateActivityFootprint(activity);
  }, 0);
  // For demo purposes, we'll just estimate daily, weekly, monthly
  return {
    daily: total / 30,
    // Assuming activities are from a month
    weekly: total / 4,
    // Assuming 4 weeks in a month
    monthly: total,
    total: total
  };
};
// Get personalized tips based on footprint data
export const getPersonalizedTips = footprintData => {
  // This would analyze the footprint data and return relevant tips
  // For now, we'll return some generic tips
  return ["Consider using public transportation more often to reduce emissions.", "Unplug electronics when not in use to save energy.", "Try incorporating more plant-based meals into your diet."];
};