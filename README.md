# Awesome Authorization [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of authorization and access control tools, frameworks, standards, and resources.

Authorization determines *what* an authenticated entity is allowed to do. This list covers the ecosystem of policy engines, standards, services, and learning resources that help developers implement authorization correctly.

## Contents

- [Policy Engines \& Frameworks](#policy-engines--frameworks)
- [Standards \& Specifications](#standards--specifications)
- [Authorization as a Service](#authorization-as-a-service)
- [Access Control Models](#access-control-models)
- [Real-World Implementations](#real-world-implementations)
- [Security](#security)
- [Articles \& Tutorials](#articles--tutorials)
- [Videos \& Talks](#videos--talks)
- [Books](#books)

## Policy Engines & Frameworks

### General Purpose

- [OPA (Open Policy Agent)](https://www.openpolicyagent.org/) - CNCF graduated policy engine using the Rego language. Decouples policy from application code.
- [Cedar](https://www.cedarpolicy.com/) - Policy language and evaluation engine by AWS, designed for expressive, analyzable authorization policies.
- [Casbin](https://casbin.org/) - Authorization library supporting ACL, RBAC, ABAC and more, with adapters for many languages and storage backends.
- [Cerbos](https://cerbos.dev/) - Scalable, self-hosted authorization layer with a YAML/JSON policy language and built-in testing.
- [Oso](https://www.osohq.com/) - Authorization framework with Polar, a declarative policy language designed for application authorization.
- [Open Policy Administration Layer (OPAL)](https://github.com/permitio/opal) - Administration layer for policy engines, keeping authorization data and policies up to date.

### Zanzibar-Based

Inspired by Google Zanzibar, the global authorization system using relationship-based access control.

- [SpiceDB](https://github.com/authzed/spicedb) - Open source Zanzibar-inspired database for fine-grained permissions.
- [OpenFGA](https://github.com/openfga/openfga) - Open source fine-grained authorization engine by the Linux Foundation, originated from Auth0 FGA.
- [Permify](https://github.com/Permify/permify) - Open source authorization service inspired by Google Zanzibar for fine-grained access control.
- [Ory Keto](https://github.com/ory/keto) - Open source implementation of Google Zanzibar, part of the Ory ecosystem.
- [Topaz](https://github.com/aserto-dev/topaz) - Open source authorizer combining Zanzibar and OPA, by Aserto.
- [Warrant](https://github.com/warrant-dev/warrant) - Open source fine-grained authorization engine inspired by Zanzibar.

### Kubernetes-Native

- [OPA Gatekeeper](https://github.com/open-policy-agent/gatekeeper) - Policy controller for Kubernetes, enforcing OPA policies via admission webhooks.
- [Kyverno](https://kyverno.io/) - Kubernetes-native policy engine designed for cluster resource validation, mutation, and generation.
- [Kubewarden](https://www.kubewarden.io/) - Kubernetes policy engine using WebAssembly policies.
- [jsPolicy](https://www.jspolicy.com/) - JavaScript/TypeScript-based policy engine for Kubernetes.

### AuthZEN Implementations

- [OPA AuthZEN Plugin](https://github.com/kanywst/opa-authzen-plugin) - OPA plugin implementing the OpenID AuthZEN Authorization API specification.
- Cerbos - Supports the AuthZEN PDP API specification. See [General Purpose](#general-purpose).
- Topaz - Supports the AuthZEN evaluation API. See [Zanzibar-Based](#zanzibar-based).

### Language-Specific Libraries

- [Spring Security](https://spring.io/projects/spring-security) - Comprehensive security framework for Java/Spring with built-in authorization support.
- [Apache Shiro](https://shiro.apache.org/) - Java security framework with authentication, authorization, cryptography, and session management.
- [Pundit](https://github.com/varvet/pundit) - Minimal authorization library for Ruby on Rails using plain Ruby objects.
- [CanCanCan](https://github.com/CanCanCommunity/cancancan) - Authorization library for Ruby on Rails defining user abilities.
- [CASL](https://casl.js.org/) - Isomorphic authorization library for JavaScript/TypeScript supporting ABAC.
- [Authzed Client Libraries](https://github.com/authzed) - Official client libraries for SpiceDB in Go, Python, Java, Ruby, and Node.js.
- [django-rules](https://github.com/dfunckt/django-rules) - Composable, object-level permissions for Django using predicate-based rules.
- [Laravel Authorization](https://laravel.com/docs/authorization) - Built-in gates and policies for authorization in Laravel/PHP.

## Standards & Specifications

### OpenID AuthZEN

- [AuthZEN Specification](https://openid.net/wg/authzen/) - OpenID Foundation working group defining a standard REST API for authorization decisions (PDP/PEP pattern).
- [AuthZEN Interop](https://github.com/openid/authzen) - Official AuthZEN interoperability testing resources.

### Identity & Federation

- [OAuth 2.0 (RFC 6749)](https://datatracker.ietf.org/doc/html/rfc6749) - Industry-standard authorization framework for delegated access.
- [OAuth 2.1 (Draft)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-11) - Consolidation of OAuth 2.0 best practices into a single specification.
- [OpenID Connect (OIDC)](https://openid.net/developers/how-connect-works/) - Identity layer on top of OAuth 2.0 for authentication and basic authorization.
- [UMA 2.0 (User-Managed Access)](https://docs.kantarainitiative.org/uma/wg/rec-oauth-uma-grant-2.0.html) - OAuth-based protocol for user-controlled resource sharing.
- [GNAP (Grant Negotiation and Authorization Protocol)](https://datatracker.ietf.org/doc/html/draft-ietf-gnap-core-protocol) - Next-generation authorization protocol, successor to OAuth.

### Workload Identity

- [SPIFFE](https://spiffe.io/) - Secure Production Identity Framework for Everyone. CNCF project providing cryptographic identity for workloads.
- [SPIRE](https://spiffe.io/docs/latest/spire-about/) - SPIFFE Runtime Environment. Production-ready implementation of SPIFFE APIs.
- [SPIFFE/SPIRE Documentation](https://spiffe.io/docs/) - Official documentation for SPIFFE standards and SPIRE.

### Policy Standards

- [XACML](https://en.wikipedia.org/wiki/XACML) - eXtensible Access Control Markup Language. XML-based standard for attribute-based access control policies.
- [ALFA](https://en.wikipedia.org/wiki/ALFA_(authorization)) - Abbreviated Language for Authorization. A human-readable DSL for writing XACML policies.

### Cloud Native

- [CNCF TAG-Security](https://github.com/cncf/tag-security) - CNCF Technical Advisory Group for security, covering authorization and policy topics.
- [CNCF Policy WG](https://github.com/cncf/tag-security/tree/main/policy) - Working group focused on policy and authorization in cloud native environments.

## Authorization as a Service

- [Auth0 Fine Grained Authorization](https://auth0.com/fine-grained-authorization) - Managed OpenFGA service by Auth0/Okta.
- [Authzed](https://authzed.com/) - Managed SpiceDB service for Zanzibar-style fine-grained permissions.
- [Permit.io](https://www.permit.io/) - Full-stack authorization service with policy management UI and OPAL integration.
- [Aserto](https://www.aserto.com/) - Cloud-native authorization service built on Topaz (OPA + Zanzibar).
- [Oso Cloud](https://www.osohq.com/oso-cloud) - Managed authorization service using the Polar policy language.
- [Cerbos Hub](https://cerbos.dev/product/hub) - Managed deployment and testing for Cerbos policies.
- [WorkOS FGA](https://workos.com/docs/fga) - Fine-grained authorization for B2B applications.
- [Axiomatics](https://www.axiomatics.com/) - Enterprise ABAC authorization platform.
- [PlainID](https://www.plainid.com/) - Policy-based access control platform for enterprise authorization.

## Access Control Models

- [RBAC (Role-Based Access Control)](https://en.wikipedia.org/wiki/Role-based_access_control) - Assigns permissions to roles, then roles to users.
- [ABAC (Attribute-Based Access Control)](https://en.wikipedia.org/wiki/Attribute-based_access_control) - Evaluates attributes of users, resources, and environment to make access decisions.
- [ReBAC (Relationship-Based Access Control)](https://en.wikipedia.org/wiki/Relationship-based_access_control) - Grants access based on relationships between entities, as popularized by Google Zanzibar.
- [PBAC (Policy-Based Access Control)](https://csrc.nist.gov/glossary/term/policy_based_access_control) - Uses policies to evaluate access requests dynamically.
- [DAC (Discretionary Access Control)](https://en.wikipedia.org/wiki/Discretionary_access_control) - Resource owners control who has access to their resources.
- [MAC (Mandatory Access Control)](https://en.wikipedia.org/wiki/Mandatory_access_control) - System-enforced access control based on security labels and clearance levels.
- [ACL (Access Control List)](https://en.wikipedia.org/wiki/Access-control_list) - Lists of permissions attached to objects specifying which users have access.

## Real-World Implementations

Engineering blog posts and case studies from companies implementing authorization at scale.

- [Google Zanzibar (Paper)](https://research.google/pubs/pub48190/) - Google's consistent, global authorization system serving billions of requests.
- [Airbnb Himeji](https://medium.com/airbnb-engineering/himeji-a-scalable-centralized-system-for-authorization-at-airbnb-341664924574) - Scalable centralized authorization system based on Zanzibar.
- [Netflix ABAC on SpiceDB](https://netflixtechblog.com/abac-on-spicedb-enabling-netflixs-complex-identity-types-c118f374fa89) - ABAC implementation using SpiceDB for complex identity types.
- [How Netflix Is Solving Authorization Across Their Cloud](https://www.youtube.com/watch?v=R6tUNpRpdnY) - Talk on Netflix's cloud authorization architecture.
- [Carta AuthZ](https://medium.com/building-carta/authz-cartas-highly-scalable-permissions-system-782a7f2c840f) - Highly scalable permissions system based on Zanzibar.
- [Uber ABAC](https://www.uber.com/blog/attribute-based-access-control-at-uber/) - Centralized attribute-based access control within microservices.
- [LinkedIn Authorization at Scale](https://engineering.linkedin.com/blog/2019/03/authorization-at-linkedins-scale) - High-performance authorization in a microservices architecture.
- [Reddit Advertising Authorization](https://www.reddit.com/r/RedditEng/comments/13vttm8/evolving_authorization_for_our_advertising/) - Fine-grained authorization for the advertising platform.
- [Figma Custom Permissions DSL](https://www.figma.com/blog/how-we-rolled-out-our-own-permissions-dsl-at-figma/) - Custom DSL for managing product permissions.
- [Intuit AuthZ (XACML)](https://medium.com/intuit-engineering/authz-intuits-unified-dynamic-authorization-system-bea554d18f91) - Unified dynamic authorization system using XACML.
- [Lyft Airflow DAG-Level Access](https://eng.lyft.com/securing-apache-airflow-ui-with-dag-level-access-a7bc649a2821) - Fine-grained access control on Apache Airflow.
- [AppsFlyer Microservices Authorization](https://medium.com/appsflyerengineering/authorization-solution-for-microservices-architecture-a2ac0c3c510b) - Authorization in a microservices architecture.
- [Ubicloud ABAC Learnings](https://www.ubicloud.com/blog/learnings-from-building-a-simple-authorization-system-abac) - Lessons from building a simple ABAC system.

## Security

- [OWASP Top 10 - Broken Access Control](https://owasp.org/Top10/A01_2021-Broken_Access_Control/) - The #1 web application security risk as of 2021.
- [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) - Best practices for authorization implementation.
- [OWASP API Security Top 10](https://owasp.org/www-project-api-security/) - Top 10 security risks for APIs, including broken authorization.
- [Insecure Direct Object References (IDOR)](https://portswigger.net/web-security/access-control/idor) - Common vulnerability from missing authorization checks.
- [CISA/NSA IDOR Advisory](https://www.theregister.com/2023/07/29/cisa_nsa_idor_australia/) - Joint advisory on the prevalence of IDOR attacks.
- [Building a Modern Zero Trust Strategy](https://thenewstack.io/ebooks/security/trust-no-one-and-automate-almost-everything-building-a-modern-zero-trust-strategy) - Overview of zero trust security architecture.

## Articles & Tutorials

- [API Tokens: A Tedious Survey](https://fly.io/blog/api-tokens-a-tedious-survey/) - Overview of approaches to API security and token management.
- [Authorization in a Microservices World](https://www.alexanderlolis.com/authorization-in-a-microservices-world) - Approaches to authorization in microservices.
- [AWS - AuthZ for SaaS Multi-Tenant Apps](https://docs.aws.amazon.com/prescriptive-guidance/latest/saas-multitenant-api-access-authorization/welcome.html) - Implementation guide for authorization in multi-tenant apps.
- [Permissions Systems: Category Notes](https://kojo.blog/permissions-sytems/) - Overview of the permissions systems landscape.
- [What Do Authentication and Authorization Mean in Zero Trust?](https://thenewstack.io/what-do-authentication-and-authorization-mean-in-zero-trust/) - Authn and authz within a zero trust architecture.
- [Feature Flags and Authorization Abstract the Same Concept](https://ntietz.com/blog/feature-flags-and-authorization/) - Comparing feature flagging and authorization.
- [How To Structure Permissions In A SaaS App](https://heap.io/blog/structure-permissions-saas-app) - Approaches to RBAC, ACLs in SaaS applications.
- [Why Google Zanzibar Shines at Building Authorization](https://workos.com/blog/google-zanzibar-authorization) - Why Zanzibar is well suited for application authorization.

## Videos & Talks

- [Hashicorp - Microservice Authentication and Authorization (2019)](https://www.youtube.com/watch?v=ZjPF8yZ83Wo) - Patterns for authn/authz in microservices.
- [Deloitte - Zero Trust with ABAC (2022)](https://www.youtube.com/watch?v=-XFn85HtVDA) - Strengthening zero trust architecture with attribute-based access control.
- [Zanzibar at @Scale 2019](https://www.facebook.com/atscaleevents/videos/scale-2019-zanzibar-googles-consistent-global-authorization-system/524366141717632/) - Google's presentation on Zanzibar.
- [Zanzibar Academy](https://zanzibar.academy/) - Educational resources about Zanzibar by Auth0.

## Books

- [Authorization and Access Control](https://www.manning.com/books/authorization-and-access-control) - Practical guide to implementing authorization in modern applications (Manning).
- [IAM for the Cloud](https://link.springer.com/book/10.1007/978-3-031-68426-6) - Identity and access management concepts for cloud environments.

## Contributing

Contributions welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first.
