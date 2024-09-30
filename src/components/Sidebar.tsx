import { Link } from "react-router-dom"; 
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.jpg";
import "flowbite";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useBreakpointValue, // Import useBreakpointValue
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiImage, FiLayers, FiFileText, FiVideo, FiTrash, FiClipboard 
} from "react-icons/fi";
import { PiSelectionBackgroundLight } from "react-icons/pi";
import { IconType } from "react-icons";
import React from "react";

interface LinkItemProps {
  name: string;
  icon: IconType;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const LinkItems: LinkItemProps[] = [
  { name: "Home", icon: FiHome, path: "/" },
  { name: "Trending", icon: FiTrendingUp, path: "/trending" },
  { name: "Explore", icon: FiCompass, path: "/explore" },
  { name: "Favourites", icon: FiStar, path: "/favourites" },
  { name: "Settings", icon: FiSettings, path: "/settings" },
];

const exploreItems = [
  { name: "Image Generation", path: "/explore/image-generation", icon: FiImage },
  { name: "Icon Generation", path: "/explore/icon-generation", icon: FiLayers },
  { name: "PDF Generation", path: "/explore/pdf-generation", icon: FiFileText },
  { name: "Video Generation", path: "/explore/video-generation", icon: FiVideo },
  { name: "Background Generation", path: "/explore/background-generation", icon: PiSelectionBackgroundLight },
  { name: "Background Removal", path: "/explore/background-removal", icon: FiTrash },
  { name: "Mockup News", path: "/explore/mockup-news", icon: FiClipboard },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const [isExploreOpen, setExploreOpen] = React.useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleExploreClick = () => {
    setExploreOpen((prev) => !prev);
  };

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("#192130", "gray.900")}
      color="white"
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <img
          src={logo}
          alt="Logo"
          className="h-20 flex pl-5 hidden lg:block w-30"
        />
        <CloseButton
          display={{ base: "flex", md: "none" }}
          className="flex items-end justify-end"
          onClick={onClose}
        />
      </Flex>
      {LinkItems.map((link) => (
        <React.Fragment key={link.name}>
          <NavItem
            icon={link.icon}
            path={link.path}
            onClose={onClose}
            onClick={link.name === "Explore" ? handleExploreClick : undefined}
          >
            {link.name}
            {link.name === "Explore" && (
              <Icon as={FiChevronDown} ml={2} boxSize={4} />
            )}
          </NavItem>
          {/* Always show explore items on mobile */}
          {link.name === "Explore" && (isExploreOpen || isMobile) && (
            <Box pl={5}>
              {exploreItems.map((item) => (
                <NavItem
                  key={item.name}
                  fontSize="sm"
                  icon={item.icon}
                  borderColor={useColorModeValue("gray.200", "gray.700")}
                  py={2}
                  pl={5}
                  path={item.path}
                  onClose={onClose}
                  onClick={onClose}
                >
                  {item.name}
                </NavItem>
              ))}
            </Box>
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, path, onClose, onClick, ...rest }: NavItemProps) => {
  return (
    <Link to={path || ""} style={{ textDecoration: "none" }} onClick={() => {
      if (onClose) onClose();
      if (onClick) onClick(); 
    }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "black",
        }}
        {...rest}
      >
        {icon && <Icon mr="4" fontSize="16" as={icon} />}
        {children}
      </Flex>
    </Link>
  );
};
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("#192130", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        color="white"
        className="text-white hover:text-black"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        <img
          src={logo}
          alt="Logo"
          className="h-20 flex items-center justify-center w-20"
        />
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell className="text-white hover:text-black" />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar size={"sm"} src={logo2} />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text className="text-white" fontSize="sm">Muhammad Hussain</Text>
                  <Text fontSize="xs" className="text-white" color="white.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown className="text-white" />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem><Link to="/settings">Settings</Link></MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const SidebarWithHeader = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("#192130", "gray.900")}>
      <SidebarContent
        onClose={onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* Mobile Nav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="">
        {/* Content */}
        {children}      </Box>
    </Box>
  );
};

export default SidebarWithHeader;
