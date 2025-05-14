import { location } from "@/lib/types";
import GooglePlacesAutocomplete, {

} from "react-google-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
interface GooglePlacesInputProps {
    onChange: (locationData: location) => void;
    initialValue?: location | null;
}

function GooglePlacesInput({ onChange, initialValue }: GooglePlacesInputProps) {
    return (
        <GooglePlacesAutocomplete
            apiKey="AIzaSyCJ2V6iHaVtyMC0zl0cBF6mktw3sdJblX4"
            selectProps={{
                value: initialValue
                    ? { label: initialValue.name, value: initialValue }
                    : undefined,

                defaultInputValue: initialValue?.name || "",
                onChange: async (newValue) => {
                    if (newValue) {
                        try {
                            const results = await geocodeByAddress(newValue.label);
                            const { lat, lng } = await getLatLng(results[0]);
                            const locationData = {
                                name: newValue.label,
                                latitude: lat,
                                longitude: lng,
                                address: newValue.value.description,
                            };

                            onChange(locationData);
                        } catch (error) {
                            console.error("Error fetching geocode or lat/lng", error);
                        }
                    }
                },
            }}
        />
    );
}

export default GooglePlacesInput;
