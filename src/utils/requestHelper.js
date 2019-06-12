class RequestHelper {
  static generateFormData(data) {
    const keyValue = Object.entries(data);
    const form = new FormData();

    for (const [key, value] of keyValue) {
      form.append(key, value);
    }

    return form;
  }
}

export default RequestHelper;
