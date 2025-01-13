# 2mpm-presentation
This repository is purely for showing overall file structure of the project, with few code excerpts (paths for files with code listed below).

Short description of content:
1. 2mpm-landing-site: Landing page project for main page, www.2minutespastmidnight.com - written in angular 18.
2. 2mpm-react: Project for incorporated one of applications features, written (by me) in React and displayed within main Angular page. Events connected via redux store/angular rxjs.
3. 2mpm-api2: Main project for API - contains game server logic, authentication, endpoints and many more.
4. 2mtm-web: Angular/Ionic frontend for main application and most of the features.
5. auth-ui: Small project with brand customisation for Azure B2C logging site.

Content of follow files with code is available (for loot pools feature, which allows GM to generate items randomly based on specific group type and quality):




Frontend:

[2mtm_web/src/app/core/api/stores/lootpools.store.ts](2mtm_web/src/app/core/api/stores/lootpools.store.ts)

[2mtm_web/src/app/core/api/services/lootpools-service/lootpools.service.ts](2mtm_web/src/app/core/api/services/lootpools-service/lootpools.service.ts)

[2mtm_web/src/app/pages/main-view/components/gm-items/loot-pools-resolver/ammo-magazine.resolver.ts](2mtm_web/src/app/pages/main-view/components/gm-items/loot-pools-resolver/ammo-magazine.resolver.ts)<br>
[2mtm_web/src/app/pages/main-view/components/gm-items/loot-pools-resolver/loot-pools-resolvers.utils.ts](2mtm_web/src/app/pages/main-view/components/gm-items/loot-pools-resolver/loot-pools-resolvers.utils.ts)<br>
[2mtm_web/src/app/pages/main-view/components/gm-items/loot-pools-resolver/loot-pools.resolver.ts](2mtm_web/src/app/pages/main-view/components/gm-items/loot-pools-resolver/loot-pools.resolver.ts)<br>
[2mtm_web/src/app/pages/main-view/components/gm-items/loot-pools-resolver/single-loot-pool.resolver.ts](2mtm_web/src/app/pages/main-view/components/gm-items/loot-pools-resolver/single-loot-pool.resolver.ts)<br>

[2mtm_web/src/app/pages/main-view/components/gm-items/components/create-new-items-modal/loot-pool-panel/loot-pool-panel.component.html](2mtm_web/src/app/pages/main-view/components/gm-items/components/create-new-items-modal/loot-pool-panel/loot-pool-panel.component.html)<br>
[2mtm_web/src/app/pages/main-view/components/gm-items/components/create-new-items-modal/loot-pool-panel/loot-pool-panel.component.scss](2mtm_web/src/app/pages/main-view/components/gm-items/components/create-new-items-modal/loot-pool-panel/loot-pool-panel.component.scss)<br>
[2mtm_web/src/app/pages/main-view/components/gm-items/components/create-new-items-modal/loot-pool-panel/loot-pool-panel.component.ts](2mtm_web/src/app/pages/main-view/components/gm-items/components/create-new-items-modal/loot-pool-panel/loot-pool-panel.component.ts)<br>

Backend: 

[2mtm_api2/src/controllers/lootpools.controller.ts](2mtm_api2/src/controllers/lootpools.controller.ts)<br>
[2mtm_api2/src/services/lootpools.service.ts](2mtm_api2/src/services/lootpools.service.ts)<br>
[2mtm_api2/src/repositories/loot-pools.repository.ts](2mtm_api2/src/repositories/loot-pools.repository.ts)<br>

[2mtm_api2/src/interfaces/lootpools/lootpool.interface.ts](2mtm_api2/src/interfaces/lootpools/lootpool.interface.ts)<br>

[2mtm_api2/src/mongoose/schemas/lootpools/lootpool-record.schema.ts](2mtm_api2/src/mongoose/schemas/lootpools/lootpool-record.schema.ts)<br>
[2mtm_api2/src/mongoose/schemas/lootpools/lootpool.schema.ts](2mtm_api2/src/mongoose/schemas/lootpools/lootpool.schema.ts)<br>

Loot pools component highlighted:
![Lootpools](https://github.com/user-attachments/assets/dc179f58-c004-4ad3-b88d-07ff19fa3951)

