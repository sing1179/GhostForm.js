class FormAnalysisResult {
    private Map<String, String> autofill;

    public FormAnalysisResult(Map<String, String> autofill) {
        this.autofill = autofill;
    }
    public Map<String, String> getAutofill() {
        return autofill;
    }
    public void setAutofill(Map<String, String> autofill) {
        this.autofill = autofill;
    }
}
