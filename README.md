<div align="center">
  <img src="media/logo.svg" width="400" alt="Awesome Authorization">
  <br>
  <br>
</div>

# Awesome Authorization [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Authorization and access control: policy engines, standards, services, and learning resources.

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

- [OPA (Open Policy Agent)](https://www.openpolicyagent.org/) - CNCF graduated. General-purpose policy engine with its own language (Rego).
- [Cedar](https://www.cedarpolicy.com/) - Policy language and engine by AWS. Designed to be analyzable and expressive.
- [Casbin](https://casbin.org/) - Supports ACL, RBAC, ABAC, etc. Has adapters for many languages and storage backends.
- [Cerbos](https://cerbos.dev/) - Self-hosted authorization layer. Policies are defined in YAML/JSON with built-in testing support.
- [Oso](https://www.osohq.com/) - Comes with Polar, a declarative policy language for application-level authorization.
- [Open Policy Administration Layer (OPAL)](https://github.com/permitio/opal) - Keeps policies and data in sync across policy engines in real time.

### Zanzibar-Based

Inspired by Google Zanzibar, Google's global authorization system built around relationship-based access control.

- [SpiceDB](https://github.com/authzed/spicedb) - Zanzibar-inspired database for fine-grained permissions by Authzed.
- [OpenFGA](https://github.com/openfga/openfga) - Fine-grained authorization engine, originally from Auth0. Now under the Linux Foundation.
- [Permify](https://github.com/Permify/permify) - Zanzibar-inspired authorization service for fine-grained access control.
- [Ory Keto](https://github.com/ory/keto) - Go implementation of Zanzibar. Part of the Ory ecosystem.
- [Topaz](https://github.com/aserto-dev/topaz) - Combines Zanzibar model with OPA. By Aserto.
- [Warrant](https://github.com/warrant-dev/warrant) - Fine-grained authorization engine, Zanzibar-inspired.

### Kubernetes-Native

- [OPA Gatekeeper](https://github.com/open-policy-agent/gatekeeper) - Kubernetes admission controller using OPA policies.
- [Kyverno](https://kyverno.io/) - Kubernetes-native policy engine for validation, mutation, and generation.
- [Kubewarden](https://www.kubewarden.io/) - Policy engine for Kubernetes using WebAssembly.
- [jsPolicy](https://www.jspolicy.com/) - Write Kubernetes policies in JavaScript/TypeScript.

### AuthZEN Implementations

- [OPA AuthZEN Plugin](https://github.com/kanywst/opa-authzen-plugin) - OPA plugin that implements the OpenID AuthZEN Authorization API.
- Cerbos - Has AuthZEN PDP API support. See [General Purpose](#general-purpose).
- Topaz - Has AuthZEN evaluation API support. See [Zanzibar-Based](#zanzibar-based).

### Language-Specific Libraries

- [Spring Security](https://spring.io/projects/spring-security) - Security framework for Java/Spring. Handles both authn and authz.
- [Apache Shiro](https://shiro.apache.org/) - Java security framework covering authn, authz, crypto, and session management.
- [Pundit](https://github.com/varvet/pundit) - Simple authorization for Ruby on Rails using plain Ruby objects.
- [CanCanCan](https://github.com/CanCanCommunity/cancancan) - Ruby on Rails authorization. Define what users can and cannot do.
- [CASL](https://casl.js.org/) - Isomorphic JavaScript/TypeScript authorization supporting ABAC.
- [Authzed Client Libraries](https://github.com/authzed) - Official SpiceDB clients for Go, Python, Java, Ruby, and Node.js.
- [django-rules](https://github.com/dfunckt/django-rules) - Object-level permissions for Django using composable predicates.
- [Laravel Authorization](https://laravel.com/docs/authorization) - Gates and policies for authorization in Laravel.

## Standards & Specifications

### OpenID AuthZEN

- [AuthZEN Specification](https://openid.net/wg/authzen/) - OpenID working group standardizing a REST API for authorization decisions (PDP/PEP).
- [AuthZEN Interop](https://github.com/openid/authzen) - Interoperability tests for AuthZEN implementations.

### Identity & Federation

- [OAuth 2.0 (RFC 6749)](https://datatracker.ietf.org/doc/html/rfc6749) - The standard framework for delegated authorization.
- [OAuth 2.1 (Draft)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-11) - Consolidates OAuth 2.0 and its best practice RFCs into one spec.
- [OpenID Connect (OIDC)](https://openid.net/developers/how-connect-works/) - Identity layer on top of OAuth 2.0.
- [UMA 2.0 (User-Managed Access)](https://docs.kantarainitiative.org/uma/wg/rec-oauth-uma-grant-2.0.html) - OAuth-based protocol enabling users to control access to their resources.
- [GNAP](https://datatracker.ietf.org/doc/html/draft-ietf-gnap-core-protocol) - Grant Negotiation and Authorization Protocol. Next-gen successor to OAuth.

### Workload Identity

- [SPIFFE](https://spiffe.io/) - Secure Production Identity Framework for Everyone. Provides cryptographic identity to workloads (CNCF).
- [SPIRE](https://spiffe.io/docs/latest/spire-about/) - Production-ready SPIFFE runtime.
- [SPIFFE/SPIRE Documentation](https://spiffe.io/docs/) - Official docs.

### Policy Standards

- [XACML](https://en.wikipedia.org/wiki/XACML) - XML-based standard for ABAC policies. Mature but verbose.
- [ALFA](<https://en.wikipedia.org/wiki/ALFA_(authorization)>) - Human-readable DSL for writing XACML policies.

### Cloud Native

- [CNCF TAG-Security](https://github.com/cncf/tag-security) - CNCF Technical Advisory Group covering authorization, policy, and security.

## Authorization as a Service

- [Auth0 Fine Grained Authorization](https://auth0.com/fine-grained-authorization) - Managed OpenFGA by Auth0/Okta.
- [Authzed](https://authzed.com/) - Managed SpiceDB. Zanzibar-style fine-grained permissions.
- [Permit.io](https://www.permit.io/) - Full-stack authorization with a policy management UI and OPAL.
- [Aserto](https://www.aserto.com/) - Cloud-native authz built on Topaz (OPA + Zanzibar).
- [Oso Cloud](https://www.osohq.com/oso-cloud) - Managed authorization using the Polar policy language.
- [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - Managed Cerbos policy deployment and testing.
- [WorkOS FGA](https://workos.com/docs/fga) - Fine-grained authorization for B2B apps.
- [Axiomatics](https://www.axiomatics.com/) - Enterprise ABAC platform.
- [PlainID](https://www.plainid.com/) - Policy-based access control for enterprises.

## Access Control Models

- [RBAC](https://en.wikipedia.org/wiki/Role-based_access_control) - Role-Based Access Control. Permissions are assigned to roles, roles to users.
- [ABAC](https://en.wikipedia.org/wiki/Attribute-based_access_control) - Attribute-Based Access Control. Decisions based on attributes of users, resources, and context.
- [ReBAC](https://en.wikipedia.org/wiki/Relationship-based_access_control) - Relationship-Based Access Control. Access depends on relationships between entities (see Zanzibar).
- [PBAC](https://csrc.nist.gov/glossary/term/policy_based_access_control) - Policy-Based Access Control. Policies evaluate access requests dynamically.
- [DAC](https://en.wikipedia.org/wiki/Discretionary_access_control) - Discretionary Access Control. Resource owners decide who gets access.
- [MAC](https://en.wikipedia.org/wiki/Mandatory_access_control) - Mandatory Access Control. System-enforced, based on security labels.
- [ACL](https://en.wikipedia.org/wiki/Access-control_list) - Access Control Lists. Per-object lists of who can do what.

## Real-World Implementations

How companies do authorization at scale.

- [Google Zanzibar (Paper)](https://research.google/pubs/pub48190/) - Google's global, consistent authorization system.
- [Airbnb Himeji](https://medium.com/airbnb-engineering/himeji-a-scalable-centralized-system-for-authorization-at-airbnb-341664924574) - Centralized authz system, Zanzibar-based.
- [Netflix ABAC on SpiceDB](https://netflixtechblog.com/abac-on-spicedb-enabling-netflixs-complex-identity-types-c118f374fa89) - How Netflix handles complex identity types with SpiceDB.
- [How Netflix Is Solving Authorization Across Their Cloud](https://www.youtube.com/watch?v=R6tUNpRpdnY) - Talk on Netflix's cloud authz.
- [Carta AuthZ](https://medium.com/building-carta/authz-cartas-highly-scalable-permissions-system-782a7f2c840f) - Scalable permissions system, also Zanzibar-based.
- [Uber ABAC](https://www.uber.com/blog/attribute-based-access-control-at-uber/) - Centralized ABAC across microservices.
- [LinkedIn Authorization at Scale](https://engineering.linkedin.com/blog/2019/03/authorization-at-linkedins-scale) - High-performance authz for microservices.
- [Reddit Advertising Authorization](https://www.reddit.com/r/RedditEng/comments/13vttm8/evolving_authorization_for_our_advertising/) - Fine-grained authz for their ad platform.
- [Figma Custom Permissions DSL](https://www.figma.com/blog/how-we-rolled-out-our-own-permissions-dsl-at-figma/) - Figma built their own DSL for permissions.
- [Intuit AuthZ](https://medium.com/intuit-engineering/authz-intuits-unified-dynamic-authorization-system-bea554d18f91) - XACML-based unified authz system.
- [Lyft Airflow DAG-Level Access](https://eng.lyft.com/securing-apache-airflow-ui-with-dag-level-access-a7bc649a2821) - DAG-level access control on Airflow.
- [AppsFlyer Microservices Authorization](https://medium.com/appsflyerengineering/authorization-solution-for-microservices-architecture-a2ac0c3c510b) - Authz patterns in microservices.
- [Ubicloud ABAC Learnings](https://www.ubicloud.com/blog/learnings-from-building-a-simple-authorization-system-abac) - Lessons from building a simple ABAC system.

## Security

- [OWASP Top 10 - Broken Access Control](https://owasp.org/Top10/A01_2021-Broken_Access_Control/) - #1 web security risk (2021).
- [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) - Authz best practices.
- [OWASP API Security Top 10](https://owasp.org/www-project-api-security/) - Top API security risks, including broken authz.
- [Insecure Direct Object References (IDOR)](https://portswigger.net/web-security/access-control/idor) - One of the most common access control vulnerabilities.
- [CISA/NSA IDOR Advisory](https://www.theregister.com/2023/07/29/cisa_nsa_idor_australia/) - Joint advisory on IDOR prevalence.
- [Building a Modern Zero Trust Strategy](https://thenewstack.io/ebooks/security/trust-no-one-and-automate-almost-everything-building-a-modern-zero-trust-strategy) - Zero trust overview by The New Stack.

## Articles & Tutorials

- [API Tokens: A Tedious Survey](https://fly.io/blog/api-tokens-a-tedious-survey/) - Tour of API security approaches.
- [Authorization in a Microservices World](https://www.alexanderlolis.com/authorization-in-a-microservices-world) - Patterns for authz in microservices.
- [AWS - AuthZ for SaaS Multi-Tenant Apps](https://docs.aws.amazon.com/prescriptive-guidance/latest/saas-multitenant-api-access-authorization/welcome.html) - How to set up authz in multi-tenant apps on AWS.
- [Permissions Systems: Category Notes](https://kojo.blog/permissions-sytems/) - Landscape overview of permissions systems.
- [What Do Authentication and Authorization Mean in Zero Trust?](https://thenewstack.io/what-do-authentication-and-authorization-mean-in-zero-trust/) - Authn vs authz in zero trust.
- [Feature Flags and Authorization Abstract the Same Concept](https://ntietz.com/blog/feature-flags-and-authorization/) - Interesting comparison of the two.
- [How To Structure Permissions In A SaaS App](https://heap.io/blog/structure-permissions-saas-app) - RBAC, ACLs, and more in SaaS.
- [Why Google Zanzibar Shines at Building Authorization](https://workos.com/blog/google-zanzibar-authorization) - What makes Zanzibar a good fit for app authz.

## Videos & Talks

- [Hashicorp - Microservice Authentication and Authorization (2019)](https://www.youtube.com/watch?v=ZjPF8yZ83Wo) - Authn/authz patterns for microservices.
- [Deloitte - Zero Trust with ABAC (2022)](https://www.youtube.com/watch?v=-XFn85HtVDA) - ABAC in zero trust architecture.
- [Zanzibar at @Scale 2019](https://www.facebook.com/atscaleevents/videos/scale-2019-zanzibar-googles-consistent-global-authorization-system/524366141717632/) - Google presenting Zanzibar.
- [Zanzibar Academy](https://zanzibar.academy/) - Learning resources about Zanzibar by Auth0.

## Books

- [Solving Identity Management in Modern Applications](https://link.springer.com/book/10.1007/978-1-4842-8261-8) - Authn, authz, and identity management patterns (Apress).
- [OAuth 2 in Action](https://www.manning.com/books/oauth-2-in-action) - Deep dive into OAuth 2.0 (Manning).

## Contributing

Contributions welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first.
