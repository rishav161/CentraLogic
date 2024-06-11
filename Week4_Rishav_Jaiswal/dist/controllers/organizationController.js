"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrganizationHandler = exports.updateOrganizationHandler = exports.getOrganizationByIdHandler = exports.getAllOrganizationsHandler = exports.createOrganizationHandler = void 0;
const organizationService_1 = require("../services/organizationService");
const createOrganizationHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organization = yield (0, organizationService_1.createOrganization)(req.body);
        res.json(organization);
    }
    catch (err) {
        res.json({ error: err });
    }
});
exports.createOrganizationHandler = createOrganizationHandler;
const getAllOrganizationsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organizations = yield (0, organizationService_1.getAllOrganizations)();
        res.json(organizations);
    }
    catch (err) {
        res.json({ error: err });
    }
});
exports.getAllOrganizationsHandler = getAllOrganizationsHandler;
const getOrganizationByIdHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organization = yield (0, organizationService_1.getOrganizationById)(req.params.id);
        res.json(organization);
    }
    catch (err) {
        res.json({ error: err });
    }
});
exports.getOrganizationByIdHandler = getOrganizationByIdHandler;
const updateOrganizationHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organization = yield (0, organizationService_1.updateOrganization)(req.params.id, req.body);
        res.json(organization);
    }
    catch (err) {
        res.json({ error: err });
    }
});
exports.updateOrganizationHandler = updateOrganizationHandler;
const deleteOrganizationHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, organizationService_1.deleteOrganization)(req.params.id);
        res.send();
    }
    catch (err) {
        res.json({ error: err });
    }
});
exports.deleteOrganizationHandler = deleteOrganizationHandler;
//# sourceMappingURL=organizationController.js.map