class FormMetadata {
    private long id;
    private int fieldCount;
    private Date timestamp;

    public FormMetadata(long id, int fieldCount, Date timestamp) {
        this.id = id;
        this.fieldCount = fieldCount;
        this.timestamp = timestamp;
    }
    public long getId() {
        return id;
    }
    public int getFieldCount() {
        return fieldCount;
    }
    public Date getTimestamp() {
        return timestamp;
    }
}
