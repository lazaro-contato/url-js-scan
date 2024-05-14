import {urlTestProps} from "./types";

function is_http_iri({url, allowHttps}: urlTestProps) {
    const HTTPS_REGEX = /^https:\/\//;
    const HTTP_REGEX = /^http:\/\//;

    if (allowHttps) return HTTPS_REGEX.test(url);
    return HTTP_REGEX.test(url);
}


export function isHttps ({url, allowHttps}: urlTestProps) {
    return is_http_iri({url, allowHttps})
}

export function isHttp ({url, allowHttps}: urlTestProps) {
    return is_http_iri({url, allowHttps})
}

