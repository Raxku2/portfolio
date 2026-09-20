const PrivacyPage = () => {
  return (
    <div class="flex flex-col w-full" id="privacyTop">
      <div class="max-w-[1200px] mx-auto w-full flex flex-col gap-6 py-4">
        <section class="bg-surface-container-low p-4 sm:p-6 shadow-md flex flex-col gap-4">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2">
              <span class="inline-block w-2.5 h-2.5 bg-primary-fixed shadow-[0_0_8px_#00fbfb]"></span>
              <span class="font-label-mono text-label-mono text-primary-fixed tracking-widest font-bold">
                DOCS://LEGAL/GOVERNANCE.MD
              </span>
            </div>
            <div class="flex flex-wrap items-center gap-2 font-label-mono text-label-mono">
              <span class="bg-surface-container-highest px-2 py-1 text-[#00ff00]">
                [ STATUS: RATIFIED & DEPLOYED ]
              </span>
              <span class="bg-surface-container-highest px-2 py-1 text-primary-fixed-dim">
                [ ENCRYPT: SHA-512_VERIFIED ]
              </span>
              <span class="bg-surface-container-highest px-2 py-1 text-tertiary-fixed">
                [ COMPLIANCE: RAZORPAY_AUDIT_READY ]
              </span>
            </div>
          </div>
          <div class="w-full h-px bg-outline-variant"></div>
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="flex flex-wrap items-center gap-2 font-label-mono text-label-mono">
              <span class="text-on-surface-variant mr-1">INDEX_ROUTING:</span>
              <a
                class="bg-surface-container hover:bg-primary-fixed hover:text-on-primary-fixed text-on-surface px-2.5 py-1 transition-colors"
                href="#sec-1"
              >
                [SEC 1: LOCUS]
              </a>
              <a
                class="bg-surface-container hover:bg-primary-fixed hover:text-on-primary-fixed text-on-surface px-2.5 py-1 transition-colors"
                href="#sec-2"
              >
                [SEC 2: TERMS]
              </a>
              <a
                class="bg-surface-container hover:bg-primary-fixed hover:text-on-primary-fixed text-on-surface px-2.5 py-1 transition-colors"
                href="#sec-3"
              >
                [SEC 3: REFUND & CANCEL]
              </a>
              <a
                class="bg-surface-container hover:bg-primary-fixed hover:text-on-primary-fixed text-on-surface px-2.5 py-1 transition-colors"
                href="#sec-4"
              >
                [SEC 4: LOGISTICS]
              </a>
              <a
                class="bg-surface-container hover:bg-primary-fixed hover:text-on-primary-fixed text-on-surface px-2.5 py-1 transition-colors"
                href="#sec-5"
              >
                [SEC 5: CRYPTO PRIVACY]
              </a>
            </div>
          </div>
        </section>

        <main class="bg-surface-container-low shadow-xl overflow-hidden flex flex-col">
          <div class="bg-surface-container-highest px-4 py-3 flex items-center justify-between select-none">
            <div class="flex items-center gap-2">
              <div class="h-3 w-3 bg-error shadow-[0_0_8px_rgba(255,180,171,0.5)]"></div>
              <div class="h-3 w-3 bg-tertiary-fixed shadow-[0_0_8px_rgba(252,228,66,0.5)]"></div>
              <div class="h-3 w-3 bg-primary-fixed shadow-[0_0_8px_rgba(0,251,251,0.5)]"></div>
              <span class="ml-3 font-label-mono text-label-mono text-on-surface tracking-wider font-bold truncate">
                TTY_LEGAL // MASTER SERVICE, PROCUREMENT & DATA GOVERNANCE
                MANIFESTO
              </span>
            </div>
            <div class="font-label-mono text-label-mono text-on-surface-variant hidden md:block">
              REV: 2025.04.12.v8
            </div>
          </div>

          <div class="bg-surface-container p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-label-mono text-label-mono">
            <div class="flex flex-col gap-1">
              <span class="text-on-surface-variant">EFFECTIVE_EPOCH</span>
              <span class="text-primary-fixed font-bold">
                2025-01-01T00:00:00Z
              </span>
              <span class="text-on-surface-variant text-xs">
                STATUS: CONTINUOUSLY RATIFIED
              </span>
            </div>
            <div class="flex flex-col gap-1">
              <span class="text-on-surface-variant">LEGAL_PROPRIETOR</span>
              <span class="text-on-surface font-bold">Rakesh Kundu</span>
              <span class="text-on-surface-variant text-xs">
                AKA "The Enterprise" / "The Architect"
              </span>
            </div>
            <div class="flex flex-col gap-1">
              <span class="text-on-surface-variant">JURISDICTIONAL_ANCHOR</span>
              <span class="text-on-surface font-bold">West Bengal, India</span>
              <span class="text-on-surface-variant text-xs">
                PIN: 712512 // PURBA BARDHAMAN
              </span>
            </div>
            <div class="flex flex-col gap-1">
              <span class="text-on-surface-variant">SETTLEMENT_GATEWAY</span>
              <span class="text-[#00ff00] font-bold">
                Razorpay Technologies
              </span>
              <span class="text-on-surface-variant text-xs">
                INR NOMINAL DIRECT ROUTING
              </span>
            </div>
          </div>
          <div class="p-4 sm:p-8 flex flex-col gap-10">
            <section class="flex flex-col gap-4" id="sec-1">
              <div class="flex items-center gap-3 bg-surface-container p-3">
                <span class="font-headline-md text-headline-md text-primary-fixed">
                  01.
                </span>
                <h2 class="font-headline-md text-headline-md text-primary uppercase tracking-wide">
                  ADMINISTRATIVE LOCUS & COMMUNICATION PROTOCOLS
                </h2>
              </div>
              <div class="bg-surface-container-lowest p-5 flex flex-col gap-4 font-body-md text-body-md text-on-surface leading-relaxed">
                <div class="flex items-start gap-2">
                  <span class="text-primary-fixed font-bold select-none">
                    &gt
                  </span>
                  <div>
                    <strong class="text-primary font-headline-md text-body-md">
                      1.1 Principal Place of Business:
                    </strong>
                    <p class="mt-1 text-on-surface-variant">
                      Operational and administrative command locus is registered
                      at:{" "}
                      <span class="text-on-surface font-semibold">
                        Rakesh Kundu, Purba Satgachia, Saha Para, Kalna, Purba
                        Bardhaman - 712512, West Bengal, Republic of India.
                      </span>{" "}
                      All formal legal service notices and physical
                      cryptographic hardware returns must terminate solely at
                      this validated locus.
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-primary-fixed font-bold select-none">
                    &gt
                  </span>
                  <div>
                    <strong class="text-primary font-headline-md text-body-md">
                      1.2 Telephonic Interface Node (Voice Vector):
                    </strong>
                    <p class="mt-1 text-on-surface-variant">
                      Direct escalation node:{" "}
                      <span class="text-primary-fixed font-bold">
                        +91 6296386131
                      </span>
                      . This node handles urgent dispatch clearances,
                      transaction anomalies, and infrastructure escalations.
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-primary-fixed font-bold select-none">
                    &gt
                  </span>
                  <div>
                    <strong class="text-primary font-headline-md text-body-md">
                      1.3 Electronic Mail & Digital Dispatch (Primary Vector):
                    </strong>
                    <p class="mt-1 text-on-surface-variant">
                      Authenticated inbox:{" "}
                      <a
                        class="text-primary-fixed underline hover:text-tertiary-fixed"
                        href="mailto:rakeshkundu3355@gmail.com"
                      >
                        rakeshkundu3355@gmail.com
                      </a>
                      . Inquiries routed here are programmatically logged,
                      hashed, and processed in accordance with our response
                      latency guarantee.
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-2">
                  <span class="text-primary-fixed font-bold select-none">
                    &gt
                  </span>
                  <div>
                    <strong class="text-primary font-headline-md text-body-md">
                      1.4 Temporal Operating Parameters:
                    </strong>
                    <p class="mt-1 text-on-surface-variant">
                      Operating Window: Monday through Friday, 10:00 to 18:00
                      IST (UTC+5:30). Transmissions initiated outside these
                      temporal cycles queue automatically for earliest execution
                      on the following computational banking epoch.
                    </p>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1 font-label-mono text-label-mono">
                <a
                  class="bg-surface-container p-4 hover:bg-surface-bright flex items-center justify-between group transition-all"
                  href="tel:+916296386131"
                >
                  <div class="flex flex-col">
                    <span class="text-on-surface-variant text-xs">
                      [DIRECT VOICE LINK]
                    </span>
                    <span class="text-primary group-hover:text-primary-fixed font-bold">
                      +91 6296386131
                    </span>
                  </div>
                  <span class="material-symbols-outlined text-primary-fixed">
                    call
                  </span>
                </a>
                <a
                  class="bg-surface-container p-4 hover:bg-surface-bright flex items-center justify-between group transition-all"
                  href="mailto:rakeshkundu3355@gmail.com"
                >
                  <div class="flex flex-col">
                    <span class="text-on-surface-variant text-xs">
                      [TRANSMIT ENCRYPTED PACKET]
                    </span>
                    <span class="text-primary group-hover:text-primary-fixed font-bold">
                      rakeshkundu3355@gmail.com
                    </span>
                  </div>
                  <span class="material-symbols-outlined text-primary-fixed">
                    send
                  </span>
                </a>
              </div>
            </section>
            <section class="flex flex-col gap-4" id="sec-2">
              <div class="flex items-center gap-3 bg-surface-container p-3">
                <span class="font-headline-md text-headline-md text-primary-fixed">
                  02.
                </span>
                <h2 class="font-headline-md text-headline-md text-primary uppercase tracking-wide">
                  TERMS AND CONDITIONS OF ENGAGEMENT (T&C)
                </h2>
              </div>
              <div class="bg-surface-container-lowest p-5 flex flex-col gap-5 font-body-md text-body-md text-on-surface leading-relaxed">
                <div>
                  <h3 class="text-primary font-headline-md text-body-md mb-1 font-bold">
                    2.1 Eligibility & Jurisdictional Covenants
                  </h3>
                  <p class="text-on-surface-variant">
                    By invoking any API endpoint, initiating transactions via
                    Razorpay, or executing procurement contracts with Rakesh
                    Kundu, the accessing entity expressly warrants legal
                    competence under the
                    <span class="text-on-surface font-semibold">
                      Indian Contract Act, 1872
                    </span>
                    . Entities lacking legal standing or operating within
                    jurisdictions where localized sovereign law nullifies these
                    covenants are strictly barred from protocol interaction.
                  </p>
                </div>
                <div>
                  <h3 class="text-primary font-headline-md text-body-md mb-1 font-bold">
                    2.2 Financial Consideration & Fiat Valuations
                  </h3>
                  <p class="text-on-surface-variant">
                    All tariff schedules, hardware allocations, and
                    architectural consulting services are strictly denominated
                    in{" "}
                    <span class="text-primary font-bold">
                      Indian National Rupees (INR - ₹)
                    </span>
                    . Payment settlement is mediated through licensed banking
                    intermediaries managed via the Razorpay payment
                    infrastructure. Rakesh Kundu disclaims any liability for
                    transaction anomalies arising from inter-bank latency,
                    central clearing house drops, or foreign exchange fee
                    adjustments imposed by acquiring banks.
                  </p>
                </div>
                <div>
                  <h3 class="text-primary font-headline-md text-body-md mb-1 font-bold">
                    2.3 Proprietary Rights, Intellectual Capital & Licensing
                  </h3>
                  <p class="text-on-surface-variant">
                    All source code distributions, printed circuit board layout
                    matrices, firmware packages, algorithmic telemetry models,
                    and Bitstream Protocol documentation remain the inalienable
                    and exclusive intellectual capital of{" "}
                    <span class="text-on-surface font-semibold">
                      Rakesh Kundu
                    </span>
                    . Engagement grants a single, non-exclusive,
                    non-transferable, revocable micro-license strictly confined
                    to the agreed project scope. Reverse engineering,
                    redistribution, decompilation, or model extraction without
                    prior written authorization constitutes a material breach
                    actionable under applicable copyright and intellectual
                    property legislation.
                  </p>
                </div>
                <div>
                  <h3 class="text-primary font-headline-md text-body-md mb-1 font-bold">
                    2.4 End-User Obligations & Comprehensive Indemnification
                  </h3>
                  <p class="text-on-surface-variant">
                    You agree to defend, indemnify, and hold harmless Rakesh
                    Kundu and affiliate contributors from and against any
                    claims, liabilities, damages, and computational losses
                    arising out of unauthorized deployment of delivered hardware
                    or code, violation of third-party platform terms, or
                    contravention of statutory cyber regulations.
                  </p>
                </div>
                <div>
                  <h3 class="text-primary font-headline-md text-body-md mb-1 font-bold">
                    2.5 Jurisprudence & Arbitration
                  </h3>
                  <p class="text-on-surface-variant">
                    This agreement and any dispute arising out of or in
                    connection with it shall be governed by, and construed in
                    accordance with, the substantive laws of the Republic of
                    India. In the event of irreconcilable disputes, the parties
                    irrevocably agree that the{" "}
                    <span class="text-on-surface font-semibold">
                      courts located within West Bengal, India
                    </span>{" "}
                    shall have exclusive jurisdictional competence.
                  </p>
                </div>
              </div>
            </section>
            <section class="flex flex-col gap-4" id="sec-3">
              <div class="flex items-center gap-3 bg-surface-container p-3">
                <span class="font-headline-md text-headline-md text-primary-fixed">
                  03.
                </span>
                <h2 class="font-headline-md text-headline-md text-primary uppercase tracking-wide">
                  REMITTANCE REVERSAL & CONTRACTUAL TERMINATION (REFUND /
                  CANCELLATION)
                </h2>
              </div>
              <div class="bg-surface-container-lowest p-5 flex flex-col gap-5 font-body-md text-body-md text-on-surface leading-relaxed">
                <div>
                  <h3 class="text-primary font-headline-md text-body-md mb-1 font-bold">
                    3.1 Pre-Fulfillment Severance (Order Cancellations)
                  </h3>
                  <p class="text-on-surface-variant">
                    Order cancellations may be registered strictly within a{" "}
                    <span class="text-tertiary-fixed font-bold">
                      24-hour timestamp window
                    </span>{" "}
                    from the moment of payment receipt via Razorpay, contingent
                    on physical hardware assembly not having commenced and
                    digital repositories not having been provisioned. Once
                    dispatch preparation is initiated in the logistics ledger,
                    cancellation requests are irrevocably barred.
                  </p>
                </div>
                <div>
                  <h3 class="text-primary font-headline-md text-body-md mb-1 font-bold">
                    3.2 Irrevocability of Digital Asset Transfers
                  </h3>
                  <p class="text-on-surface-variant">
                    Deliveries categorized as digital software archives,
                    confidential API access keys, custom firmware builds,
                    algorithm designs, technical mentorship, or synchronous
                    architectural sessions are deemed
                    <span class="text-error font-bold">
                      FINAL, IRREVOCABLE, AND NON-REFUNDABLE
                    </span>{" "}
                    immediately upon data dispatch, code clone confirmation, or
                    calendar commencement.
                  </p>
                </div>
                <div>
                  <h3 class="text-primary font-headline-md text-body-md mb-1 font-bold">
                    3.3 Physical Tangible Assets (IoT, Electronics, Hardware)
                  </h3>
                  <p class="text-on-surface-variant">
                    Returns for physical components, IoT nodes, embedded
                    assemblies, and computing hardware are honored solely for{" "}
                    <span class="text-on-surface font-semibold">
                      verifiable manufacturing defects
                    </span>{" "}
                    or catastrophic damage sustained during freight transit.
                    Return claims must be transmitted to{" "}
                    <span class="text-primary-fixed">
                      rakeshkundu3355@gmail.com
                    </span>{" "}
                    within 48 hours of recorded postal delivery.
                  </p>
                </div>
                <div class="bg-surface-container p-4 flex flex-col gap-2">
                  <div class="flex items-center gap-2 text-tertiary-fixed font-label-mono text-label-mono font-bold">
                    <span class="material-symbols-outlined text-lg">
                      videocam
                    </span>
                    <span>
                      3.4 MANDATORY AUDIOVISUAL EVIDENTIARY PROTOCOL (NO
                      EXCEPTIONS)
                    </span>
                  </div>
                  <p class="text-on-surface-variant font-body-md text-body-md">
                    To prevent fraudulent transit claims, claims for missing or
                    damaged physical merchandise require an uninterrupted,
                    continuous video recording documenting the unboxing process
                    from the intact outer courier parcel to the inner component
                    inspection. Any visual cuts, digital tampering, or
                    post-unboxing documentation automatically invalidates the
                    claim.
                  </p>
                </div>
                <div>
                  <h3 class="text-primary font-headline-md text-body-md mb-1 font-bold">
                    3.5 Fiscal Reversal Latency
                  </h3>
                  <p class="text-on-surface-variant">
                    Approved refunds will be initiated to the original payment
                    instrument through Razorpay within 24 hours of inspection
                    sign-off. Depending on the clearing network (UPI, NEFT,
                    RTGS, IMPS, or Card Issuer), funds typically reflect within{" "}
                    <span class="text-primary-fixed font-bold">
                      5 to 7 business banking days
                    </span>
                    .
                  </p>
                </div>
              </div>
            </section>
            <section class="flex flex-col gap-4" id="sec-4">
              <div class="flex items-center gap-3 bg-surface-container p-3">
                <span class="font-headline-md text-headline-md text-primary-fixed">
                  04.
                </span>
                <h2 class="font-headline-md text-headline-md text-primary uppercase tracking-wide">
                  LOGISTICS, FULFILLMENT & FREIGHT TRANSIT PROTOCOLS
                </h2>
              </div>
              <div class="bg-surface-container-lowest p-5 flex flex-col gap-5 font-body-md text-body-md text-on-surface leading-relaxed">
                <div>
                  <h3 class="text-primary font-headline-md text-body-md mb-1 font-bold">
                    4.1 Territorial Boundaries
                  </h3>
                  <p class="text-on-surface-variant">
                    Physical shipments of hardware prototypes, circuit modules,
                    and physical toolkits are restricted strictly to territories
                    within the sovereign boundaries of the{" "}
                    <span class="text-on-surface font-semibold">
                      Republic of India
                    </span>
                    . Overseas inquiries require specialized bespoke contract
                    execution.
                  </p>
                </div>
                <div>
                  <h3 class="text-primary font-headline-md text-body-md mb-1 font-bold">
                    4.2 Temporal Fulfillment Continuum
                  </h3>
                  <p class="text-on-surface-variant">
                    Because IoT modules and experimental hardware may require
                    bespoke manual assembly, component burn-in cycles, and bench
                    verification, dispatch timelines operate within a continuum
                    of{" "}
                    <span class="text-primary-fixed font-bold">
                      3 to 60 chronological calendar days
                    </span>
                    . Stock items dispatch within 72 hours; customized
                    fabrication builds follow milestones detailed on your
                    invoice dispatch docket.
                  </p>
                </div>
                <div>
                  <h3 class="text-primary font-headline-md text-body-md mb-1 font-bold">
                    4.3 Freight Tariffs & Dynamic Subsidization
                  </h3>
                  <p class="text-on-surface-variant">
                    Shipping rates are calculated dynamically at checkout based
                    on destination pincode, parcel mass, volumetric footprint,
                    and insurance requirements. Any applicable local octroi,
                    state entry permits, or special regional levies are the
                    exclusive responsibility of the consignee.
                  </p>
                </div>
              </div>
            </section>
            <section class="flex flex-col gap-4" id="sec-5">
              <div class="flex items-center gap-3 bg-surface-container p-3">
                <span class="font-headline-md text-headline-md text-primary-fixed">
                  05.
                </span>
                <h2 class="font-headline-md text-headline-md text-primary uppercase tracking-wide">
                  DATA GOVERNANCE & CRYPTOGRAPHIC PRIVACY MANIFESTO
                </h2>
              </div>
              <div class="bg-surface-container-lowest p-5 flex flex-col gap-5 font-body-md text-body-md text-on-surface leading-relaxed">
                <div>
                  <h3 class="text-primary font-headline-md text-body-md mb-1 font-bold">
                    5.1 Taxonomy of Ingested Information Vectors
                  </h3>
                  <p class="text-on-surface-variant">
                    When transacting through this node, we ingest essential
                    identifying metadata: full entity legal name, contact
                    telephonic numbers, billing and shipping physical
                    coordinates, communication records, and technical telemetry
                    headers (IP address, user agent, session timestamps). No
                    cardholder credentials, CVV codes, or net banking passwords
                    ever cross or reside on our localized servers; all fiscal
                    tokens remain sandboxed within Razorpay PCI-DSS certified
                    vaults.
                  </p>
                </div>
                <div>
                  <h3 class="text-primary font-headline-md text-body-md mb-1 font-bold">
                    5.2 Algorithmic Utilization & Operational Deployment
                  </h3>
                  <p class="text-on-surface-variant">
                    Ingested telemetry is processed solely to: (a) orchestrate
                    order fulfillment and route packages via logistics carriers;
                    (b) issue statutory tax invoices compliant with Indian GST
                    and income tax statutes; (c) mitigate fraudulent payment
                    vectors; and (d) distribute critical firmware security
                    advisories directly concerning active equipment.
                  </p>
                </div>
                <div>
                  <h3 class="text-primary font-headline-md text-body-md mb-1 font-bold">
                    5.3 Third-Party Data Syndication & Strict
                    Non-Commercialization
                  </h3>
                  <p class="text-on-surface-variant">
                    We do not sell, rent, monetize, or syndicate user data
                    profiles to data brokers or advertising syndicates.
                    Operational disclosures are confined exclusively to:
                  </p>
                  <ul class="mt-2 space-y-1 ml-4 list-disc text-on-surface-variant">
                    <li>
                      <strong class="text-on-surface">
                        Payment Intermediary:
                      </strong>{" "}
                      Razorpay Software Private Limited for transaction
                      clearing.
                    </li>
                    <li>
                      <strong class="text-on-surface">
                        Logistics Carriers:
                      </strong>{" "}
                      India Post / Verified 3PL Couriers for physical transit
                      fulfillment.
                    </li>
                    <li>
                      <strong class="text-on-surface">
                        Statutory Jurisdictions:
                      </strong>{" "}
                      Judicial and law enforcement authorities when formally
                      compelled under the Information Technology Act, 2000.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-primary font-headline-md text-body-md mb-1 font-bold">
                    5.4 Cryptographic Posture & Protocol Safeguards
                  </h3>
                  <p class="text-on-surface-variant">
                    All transport traffic uses TLS 1.3 encryption. At-rest
                    application datastores leverage AES-256 cryptographic
                    standards. While we implement strict technical and
                    procedural safeguards, no public internet packet routing
                    mechanism guarantees absolute mathematical invulnerability.
                    The accessing entity acknowledges these baseline
                    architectural realities.
                  </p>
                </div>
              </div>
            </section>
          </div>
          <div class="bg-surface-container-highest p-6 sm:p-8 flex flex-col gap-6">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div class="flex flex-col gap-1">
                <span class="font-label-mono text-label-mono text-on-surface-variant">
                  CRYPTOGRAPHIC RECORD SEAL
                </span>
                <span class="font-label-mono text-label-mono text-primary-fixed font-bold tracking-wider">
                  [DIGITALLY SIGNED // RAKESH KUNDU // 0x7E4F92A1B824DA12]
                </span>
              </div>
              <div class="flex flex-wrap gap-2 font-label-mono text-label-mono">
                <span class="bg-surface-container-low text-[#00ff00] px-2.5 py-1">
                  [✓ RAZORPAY COMPLIANT]
                </span>
                <span class="bg-surface-container-low text-primary-fixed px-2.5 py-1">
                  [✓ IT ACT 2000]
                </span>
                <span class="bg-surface-container-low text-tertiary-fixed px-2.5 py-1">
                  [✓ 256-BIT ENCRYPTION]
                </span>
              </div>
            </div>
            <div class="w-full h-px bg-outline-variant"></div>
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-label-mono text-label-mono text-on-surface-variant">
              <div>
                <span>
                  REGISTRY LOCUS: KALNA, PURBA BARDHAMAN 712512 // WB, INDIA
                </span>
              </div>
              <div class="flex items-center gap-4">
                <button
                  class="text-primary-fixed hover:underline flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("privacyTop")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <span class="material-symbols-outlined text-base">
                    arrow_upward
                  </span>
                  <span>RETURN TO TOP</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PrivacyPage;
