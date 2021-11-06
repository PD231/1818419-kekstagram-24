import {showFullPhoto} from './show-full-photo.js';
import {uploadPhoto} from './upload-photo.js';
import {getBackgroundContent} from './background-content.js';
import { errorMessage } from './error-message.js';
import { getData } from './api-fetch.js';
import { setSubmit } from './api-fetch.js';
import { showMessageOfSuccess, someFail, closeWindowAfterSubmit } from './api-cheked.js';

const miniatures = getData(getBackgroundContent, errorMessage);
showFullPhoto(miniatures());
uploadPhoto();
setSubmit(closeWindowAfterSubmit,  showMessageOfSuccess, someFail);
