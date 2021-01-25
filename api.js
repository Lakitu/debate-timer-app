import {times} from "times"

export function api (request) {
    if(request === "speechOptions") {
        let formats = []
        for (let format in times) {
            if (request.hasOwnProperty(format))
                formats.push(format);
        }
        return formats;
    }

    return null;
}