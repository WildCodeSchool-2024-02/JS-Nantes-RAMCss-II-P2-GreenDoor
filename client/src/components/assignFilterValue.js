export function assignLightFilterValue(lightIdeal, lightTolered) {
  let returnValue = 0;
  if (lightTolered !== null && lightTolered.includes("Diffuse")) {
    returnValue = 0;
  } else if (
    lightTolered !== null &&
    lightIdeal.includes("Strong") &&
    lightTolered.includes("Strong")
  ) {
    returnValue = 1;
  } else if (lightIdeal.includes("Full sun")) {
    returnValue = 2;
  }

  return returnValue;
}

export function assignWaterFilterValue(watering) {
  let value = 0;
  if (watering.includes("Water when soil is half dry")) {
    value = 1;
  } else if (watering.includes("Must not dry between watering")) {
    value = 2;
  }
  return value;
}
