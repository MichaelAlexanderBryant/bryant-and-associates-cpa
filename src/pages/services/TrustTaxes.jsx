function TrustTaxes() {
    return (
        <div>
            <p><a href="/#/services" className="services-item">&lt; Back to Services</a></p>
            <h1>Trust Taxes</h1>
            <h2>Do all trusts pay income taxes?</h2>
            <p>It depends. A trust is a separate legal and taxable entity. Whether the trust pays its own taxes depends on whether the trust is a simple trust, a complex trust, or a grantor trust. Simple trusts and complex trusts pay their own income taxes. Grantor trusts do NOT pay their own taxes – the grantor of the trust pays the taxes on a grantor trust’s income.</p>
            <h2>How do I know if a trust is a simple trust?</h2>
            <p>A simple trust is a trust that a) requires all trust income to be distributed at least annually, b) has no charitable beneficiaries, and c) makes no distributions of trust principal.</p>
            <p>If the trust does not meet the above definition of simple trust, it is usually either a complex trust or a grantor trust.</p>
            <h2>What is a grantor trust?</h2>
            <p>A grantor trust is a trust where the grantor is treated as the owner for income tax purposes only, by retaining certain powers over the trust assets as described in the trust agreement. Grantor trusts can either be revocable or irrevocable. Because of these grantor-retained powers, the grantor trust is ignored for income tax purposes. Some of these powers include:</p>
            <ul>
                <li>Grantor or the grantor’s spouse retains the power to revoke or amend the trust (i.e., revocable trusts), OR</li>
                <li>Grantor retains the power to substitute trust assets with assets of equal value, OR</li>
                <li>Grantor retains power to borrow trust assets without adequate security, OR</li>
                <li>Grantor or grantor’s spouse may receive distributions from the trust (i.e., spousal lifetime access trusts), OR</li>
                <li>Trust income may be used to pay premiums on life insurance policies on life of grantor or grantor’s spouse (i.e., irrevocable life insurance trusts).</li>
            </ul>
            <p>Though there are other grantor-retained powers that make a trust a grantor trust, the above are the most common.</p>
            <p>For income tax purposes, the grantor trust is treated as the same taxpayer as the grantor, even though the grantor trust is a separate legal entity and separate legal owner of the trust’s assets. So, the grantor trust’s income items are reported on the grantor’s personal income tax return and the grantor pays the taxes.</p>If the grantor does not retain any grantor trust powers such as those listed above, and the trust is not a simple trust, it is a complex trust.
            <h2>Does a trust file its own income tax return?</h2>
            <p>trust is a simple trust or complex trust, the trustee must file a tax return for the trust (IRS Form 1041) if the trust has any taxable income (gross income less deductions is greater than $0), or gross income of $600 or more.</p>
            <p>For grantor trusts, it depends. A grantor trust may use the grantor’s Social Security number as its taxpayer identification number, or it may obtain its own taxpayer identification number from the IRS. If a grantor trust uses the grantor’s Social Security number as its taxpayer identification number, it does not need to file its own income tax return as all tax documents such as 1099s will be issued to the grantor directly to report on the grantor’s individual income tax return. However, if a grantor trust has its own taxpayer identification number, it may have to file its own tax return for informational purposes only. The pro forma tax return identifies the trust as a grantor trust and includes a grantor trust letter that lists all income items that should be reported on the grantor’s individual income tax return, so that the grantor can pay the taxes.</p>
            <h2>If the trust is its own taxpayer, does the trust also have to file a state income tax return and pay state income taxes as well?</h2>
            <p>Yes, if a state has tax jurisdiction over the trust, the trust will have to file a state income tax return and pay state income taxes in that state. Each state has its own rules regarding whether it has tax jurisdiction over a trust. Some states such as New York may tax a trust if the grantor resided in New York when the trust was funded, unless there are no New York trustees, no New York situs trust assets, and no New York source income. Other states like California may tax a trust if one of the trustees or beneficiaries is a California resident.</p> 
        </div>
    )
}

export default TrustTaxes;