"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const organizationController_1 = require("../controllers/organizationController");
const router = (0, express_1.Router)();
router.post('/', organizationController_1.createOrganizationHandler);
router.get('/', organizationController_1.getAllOrganizationsHandler);
router.get('/:id', organizationController_1.getOrganizationByIdHandler);
router.put('/:id', organizationController_1.updateOrganizationHandler);
router.delete('/:id', organizationController_1.deleteOrganizationHandler);
exports.default = router;
//# sourceMappingURL=organizationRoutes.js.map