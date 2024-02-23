export class CreateLicenseDto {
    public status: string
    public companyId: string
    public drugId: string
    public expiry_date: string
    public proof_of_fund: boolean
    public has_signed_zida_application: boolean
    public has_security_plan: boolean
    public has_proof_of_land: boolean
    public is_the_company_registered: boolean
    public has_work_permit: boolean
    public has_capacity: boolean
}
