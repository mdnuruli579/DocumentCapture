export const extractFields = (text) => {
    return {
      name: extractName(text),
      documentNumber: extractDocNumber(text),
      dateOfBirth: extractDOB(text),
      issueDate: extractIssueDate(text),
      expirationDate: extractExpirationDate(text),
      address: extractAddress(text),
    };
  };